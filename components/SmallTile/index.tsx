import Link from 'next/link';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRouterRelativePath, IContent, ISite } from '@pinpt/react';

const SmallTile = ({ site, content }: { site: ISite; content: IContent }) => {
	return (
		<Link href={getRouterRelativePath(site, content.url)}>
			<a className="py-5">
				<div className="text-2xl text-[#2b3e7a] hover:underline hover:text-[#009]">{content.title}</div>
				<div className="text-base text-gray-500 mt-2 leading-9">{content.headline}</div>
				<div className="text-gray-400 text-sm mt-3 flex flex-row items-center">
					<FontAwesomeIcon icon={faCalendar} className="mr-1" />
					{new Date(content.dateAt).toLocaleDateString()}
				</div>
			</a>
		</Link>
	);
};

export default SmallTile;
