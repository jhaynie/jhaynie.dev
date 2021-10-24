import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRouterRelativePath, ISite, Search, useSearch } from '@pinpt/react';
import useClickOutside from '../../lib/useClickOutside';
import useDebounce from '../../lib/useDebounce';

interface SearchProps {
	site: ISite;
	className?: string;
	ignoreContentId?: string;
}

const SearchBox = ({ site, ignoreContentId, className = '' }: SearchProps) => {
	const router = useRouter();
	const searchRef = useRef<HTMLDivElement>(null);
	const [search, setSearch] = useState('');
	const [value] = useDebounce(search, 400);
	const { results: _results, loading } = useSearch(value, [], site);
	const [showSearch, setShowSearch] = useState(false);
	const [selected, setSelected] = useState(-1);

	const results = useMemo(
		() => _results.filter((result) => result.id !== ignoreContentId).slice(0, 5),
		[ignoreContentId, _results]
	);

	useEffect(() => setShowSearch(!!search), [search]);

	useEffect(() => {
		if (showSearch) {
			const handleKeyDown = (event: KeyboardEvent) => {
				switch (event.key) {
					case 'Escape': {
						setSearch('');
						setShowSearch(false);
						setSelected(-1);
						event.preventDefault();
						event.stopPropagation();
						break;
					}
					case 'ArrowDown': {
						setSelected((selected + 1) % results.length);
						event.preventDefault();
						event.stopPropagation();
						break;
					}
					case 'ArrowUp': {
						let newIndex = selected - 1;
						if (newIndex < 0) {
							newIndex = results.length - 1;
						}
						setSelected(newIndex);
						event.preventDefault();
						event.stopPropagation();
						break;
					}
					case 'Enter': {
						if (selected !== -1) {
							router.push(getRouterRelativePath(site, results[selected].url));
							setShowSearch(false);
							setSearch('');
							setSelected(-1);
							event.preventDefault();
							event.stopPropagation();
						}
						break;
					}
					default:
						break;
				}
			};
			window.addEventListener('keydown', handleKeyDown);
			return () => window.removeEventListener('keydown', handleKeyDown);
		}
	}, [showSearch, selected, results, router, site]);

	const onSelect = () => {
		setSearch('');
		setShowSearch(false);
		setSelected(-1);
	};

	useEffect(() => {
		setSelected(-1);
	}, [search]);

	useClickOutside(searchRef, () => onSelect(), [showSearch, searchRef]);

	return (
		<div className={`relative ${className}`}>
			<Search.Bar defaultValue={search} onChange={setSearch} />
			{showSearch && (
				<div
					ref={searchRef}
					className="border bg-gray-50 absolute top-10 min-w-[350px] max-w-[100%] right-0 z-[100]"
				>
					{!loading && results.length === 0 && (
						<div className="text-sm text-gray-500 flex flex-row items-center">
							<FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
							No results found matching your query
						</div>
					)}
					{loading && <div className="text-sm text-gray-500">Searching...</div>}
					{results.map((result, index) => (
						<div
							key={result.id}
							className={`p-3 hover:bg-green-100 ${selected === index ? 'bg-indigo-100' : ''}`}
						>
							<Link href={getRouterRelativePath(site, result.url)}>
								<a onClick={onSelect}>
									<div className="text-xs mb-1">{new Date(result.publishedAt).toLocaleDateString()}</div>
									<div className="font-semibold text-[#2b3e7a]">{result.title}</div>
									<div className="text-xs text-gray-500">{result.headline}</div>
								</a>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchBox;
