import {
	fetchContentPaginated, fetchSiteWithContentCount, IContent, ISite, Pagination
} from '@pinpt/react';
import CoverTile from '../components/CoverTile';
import Footer from '../components/Footer';
import Page from '../components/Page';
import SmallTile from '../components/SmallTile';
import config from '../pinpoint.config';

interface HomeProps {
	site: ISite;
	content: IContent[];
	after?: { title: string };
	pageCount: number;
}

export default function Home(props: HomeProps) {
	const { site, content, after, pageCount } = props;

	return (
		<Page site={site} title="My Latest Ramblings" subtitle="Latest stuff by Jeff Haynie">
			<>
				<CoverTile site={site} content={content[0]} big />
				<div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-1 divide-y">
					{content.slice(1).map((c) => (
						<SmallTile site={site} content={c} key={c.id} />
					))}
				</div>
				{pageCount > 0 && (
					<Pagination
						goForward={() => null}
						goForwardText={<Pagination.GoForwardWithArrow text={after?.title} />}
					/>
				)}
				<Footer site={site} className="bg-white" />
			</>
		</Page>
	);
}

export async function getServerSideProps() {
	const pageSize = config.pageSize ?? 11;

	const [{ site, content, after }, { count }] = await Promise.all([
		fetchContentPaginated(config, {
			limit: pageSize,
			after: true,
			site: true,
		}),
		fetchSiteWithContentCount(config),
	]);

	const pageCount = Math.ceil(count / pageSize);

	return {
		props: {
			site,
			content,
			after: after
				? {
						title: after?.title,
				  }
				: null,
			pageCount,
		},
	};
}
