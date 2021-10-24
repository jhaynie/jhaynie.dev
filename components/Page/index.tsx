import NextHead from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { faChevronUp, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Clap, FacebookShare, Head, Image, ISite, LinkedInShare, SocialMediaBar, TwitterShare
} from '@pinpt/react';
import CircleIcon from '../CircleIcon';
import SearchBox from '../SearchBox';
import Social from '../Social';

const Menu = () => {
	const router = useRouter();
	return (
		<>
			<div
				className="lg:!hidden px-10 py-2 flex flex-row items-center"
				style={{ background: 'radial-gradient( circle, rgba(1, 0, 71, 1) 40%, rgba(5, 7, 6, 1) 100%)' }}
			>
				<Image
					src="https://avatars.githubusercontent.com/u/6027?v=4"
					alt="Jeff Haynie"
					className="rounded-full w-8 h-8"
				/>
				<h1 className="text-white font-light underline-blue-500 text-xl w-full flex flex-row items-center justify-start">
					<div className="ml-4">Hi, I&apos;m Jeff</div>
					<div className="ml-auto space-x-4 flex flex-row items-center text-sm">
						<Link href="/">
							<a>
								<FontAwesomeIcon icon={faHome} fixedWidth />
							</a>
						</Link>
						<Link href="/about">
							<a>
								<FontAwesomeIcon icon={faInfo} fixedWidth />
							</a>
						</Link>
					</div>
				</h1>
			</div>
			<div
				className="hidden lg:!block w-[350px] flex-shrink-0 px-10 py-6"
				style={{ background: 'radial-gradient( circle, rgba(1, 0, 71, 1) 40%, rgba(5, 7, 6, 1) 100%)' }}
			>
				<div className="flex flex-col items-center h-full w-full">
					<Image
						src="https://avatars.githubusercontent.com/u/6027?v=4"
						alt="Jeff Haynie"
						className="rounded-full w-20 h-20 !border-4 !border-white"
					/>
					<h1 className="text-white font-light underline-blue-500 text-3xl pt-14 flex flex-row items-center justify-start">
						<span className="pr-4">👋🏼</span> Hi, I&apos;m
						<Link href="/about">
							<a className="mt-1 ml-2 bg-gradient-to-r from-yellow-100 to-yellow-300 bg-growing-underline">
								Jeff
							</a>
						</Link>
					</h1>
					<div className="mt-14 text-2xl px-8 ml-1 text-white w-full flex flex-col items-start justify-start">
						<ul className="space-y-10">
							<li>
								<Link href="/">
									<a className="flex items-center flex-row">
										<CircleIcon icon={faHome} selected={router.asPath === '/'} />
										Home
									</a>
								</Link>
							</li>
							<li>
								<Link href="/about">
									<a className="flex items-center flex-row">
										<CircleIcon icon={faInfo} selected={router.asPath === '/about'} />
										About
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="mt-auto text-white text-xl flex flex-row justify-start items-center w-full px-10 mb-4">
						<Social />
					</div>
				</div>
			</div>
		</>
	);
};

interface PageProps {
	site: ISite;
	title: string;
	subtitle: string;
	date?: string;
	social?: boolean;
	contentId?: string;
	children: React.ReactNode;
	clapCount?: number;
	sessionClapCount?: number;
	onClap?: () => void;
}

const Page = (props: PageProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { site, title, subtitle, children, contentId, date, social, clapCount, sessionClapCount, onClap } = props;
	const [reload, setReload] = useState(0);
	const [showIndicator, setShowIndicator] = useState(false);

	useEffect(() => {
		const div = ref.current;
		if (div) {
			const height = div.getBoundingClientRect().height;
			const onscroll = () => {
				const top = div.scrollTop;
				const wtop = window.innerHeight * 0.3;
				setShowIndicator(top >= wtop && top + height !== div.scrollHeight);
			};
			ref.current?.addEventListener('scroll', onscroll);
			return () => div.removeEventListener('scroll', onscroll);
		}
	}, [ref]);

	const scrollToTop = () => {
		if (ref.current) {
			const dims = ref.current.getBoundingClientRect();
			ref.current.scrollTop = dims.top - 100; // since the header is a bit below the top, add some margin above it
		}
	};

	useEffect(() => setReload(Date.now()), [children]);

	// NOTE: since we have an overflow body element and a fixed left sidebar, we need to
	// scroll the content back to the top when the page transitions otherwise if you're
	// at the bottom of the page and you click to another article, you'll stay at the bottom of the
	// page since React won't update the element scroll position
	useEffect(() => {
		scrollToTop();
	}, [reload, ref]);

	return (
		<>
			<NextHead>
				<title>{title}</title>
				<Head site={site} />
			</NextHead>
			<div className="Page w-full h-screen flex flex-col lg:!flex-row relative">
				<Menu />
				<div ref={ref} className="flex flex-col px-10 py-4 w-full h-full overflow-auto">
					<header className="flex items-start flex-col lg:!flex-row">
						<div className="order-2 lg:order-1">
							<div className="flex flex-col items-center w-full">
								<div>
									<div className="text-sm text-gray-500">{date}</div>
									<h1 className="text-xl sm:text-2xl text-[#2b3e7a]">{title}</h1>
									<p className="text-sm text-gray-500 max-w-3xl">{subtitle}</p>
								</div>
							</div>
						</div>
						<SearchBox site={site} className="order-1 lg:order-2 ml-auto" ignoreContentId={contentId} />
					</header>
					<div className="flex flex-row items-center w-full">
						{social && typeof window !== 'undefined' && (
							<SocialMediaBar className="narrow">
								<TwitterShare href={location.href} newTab />
								<LinkedInShare href={location.href} newTab />
								<FacebookShare href={location.href} newTab />
							</SocialMediaBar>
						)}
						{onClap && (
							<div className="ml-auto">
								<Clap clapCount={clapCount!} sessionClapCount={sessionClapCount!} handleClap={onClap!} />
							</div>
						)}
					</div>
					<div className="mt-10 w-full">{children}</div>
				</div>
				<div
					className={`cursor-pointer absolute bottom-5 right-5 z-1 transition-opacity duration-300 opacity-0 ${
						showIndicator ? 'opacity-100' : 'opacity-0'
					}`}
					onClick={scrollToTop}
				>
					<div className="rounded-full w-16 h-16 bg-gray-800 opacity-50 flex items-center justify-center text-4xl">
						<FontAwesomeIcon icon={faChevronUp} className="text-white" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
