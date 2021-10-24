import type { IContent, ISite } from '@pinpt/react';
import Link from 'next/link';
import { getRouterRelativePath } from '@pinpt/react';
import { CoverMedia } from '@pinpt/react/dist/cjs/components/Renderer';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CoverTile = ({ site, content, big }: { site: ISite; content: IContent; big?: boolean }) => {
	const dt = new Date(content.dateAt ?? content.publishedAt);
	const now = new Date();
	const top = dt.getFullYear() === now.getFullYear() ? months[dt.getMonth()] : dt.getFullYear();
	const bottom = dt.getFullYear() === now.getFullYear() ? dt.getDate() : months[dt.getMonth()];
	return (
		<div className="flex items-center justify-center">
			<div
				className={`rounded-md flex-shrink-0 relative overflow-hidden shadow-2xl border inline-flex items-center justify-center max-w-full ${
					big ? 'max-h-[480px]' : 'max-h-[240px]'
				}`}
			>
				<Link href={getRouterRelativePath(site, content.url)}>
					<a>
						{content.coverMedia?.placeholderImage ? (
							<CoverMedia media={content.coverMedia} title={content.title} zoomable={false} />
						) : (
							<div className="w-full h-full bg-gray-200"></div>
						)}
						<div
							className={`absolute bottom-0 left-0 right-0 flex items-center ${big ? 'h-[140px]' : 'h-[100px]'}`}
						>
							<div
								className="opacity-80 absolute inset-0 z-1"
								style={{
									background: 'radial-gradient( circle, #009 40%, #000 100%)',
								}}
							></div>
							<div className="text-white absolute inset-0 p-4 flex flex-col items-start z-[100]">
								<div className={`${big ? 'text-2xl' : 'text-sm'} font-semibold`}>{content.title}</div>
								<div className={`${big ? 'text-sm' : 'text-xs'} mt-1`}>{content.headline}</div>
							</div>
							<div className="absolute -top-8 right-3 z-[2] rounded-full bg-white h-12 w-12 text-sm flex flex-col items-center justify-center font-medium text-purple-800">
								<div className="font-bold text-base">{top}</div>
								<div className="-mt-1">{bottom}</div>
							</div>
						</div>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default CoverTile;
