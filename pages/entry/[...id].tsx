import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
	Banner, Clap, createClap, Document, fetchContent, fetchContentAnalytics, getRouterRelativePath,
	IContent, ISite, PrebuiltEntry
} from '@pinpt/react';
import Footer from '../../components/Footer';
import Page from '../../components/Page';
import config from '../../pinpoint.config';

interface EntryPageProps {
	content: IContent;
	before: IContent;
	after: IContent;
	site: ISite;
	preview?: boolean;
}

const PreviewBanner = () => {
	return <Banner message="You are viewing an unpublished preview of your page" />;
};

export default function EntryPage(props: EntryPageProps) {
	const router = useRouter();
	const { content, site, before, after, preview } = props;
	const [sessionCount, setSessionCount] = useState(0);
	const [totalCount, setTotalCount] = useState(0);
	const [maxed, setMaxed] = useState(false);
	const contentId = content.id;

	useEffect(() => {
		fetchContentAnalytics(config, contentId).then(({ claps }: { claps: number }) => {
			setTotalCount(claps);
		});
	}, [contentId]);

	const onClap = useCallback(
		(entry: IContent) => {
			if (!maxed) {
				createClap(config, entry.id).then((res: { sessionCount: number; count: number; max: boolean }) => {
					setSessionCount(res.sessionCount);
					setTotalCount(res.count);
					setMaxed(res.max);
				});
			}
		},
		[maxed]
	);

	const date = useMemo(() => {
		return new Date(content.dateAt ?? content.publishedAt).toLocaleDateString();
	}, [content]);

	return (
		<Page
			site={site}
			title={content.title}
			subtitle={content.headline}
			date={date}
			contentId={content.id}
			social
			clapCount={totalCount}
			sessionClapCount={sessionCount}
			onClap={() => onClap(content)}
		>
			<>
				{preview && <PreviewBanner />}
				<PrebuiltEntry
					zoomable={false}
					content={content}
					site={site}
					onClap={onClap}
					clapCount={totalCount}
					sessionClapCount={sessionCount}
					nextEntry={after}
					previousEntry={before}
					handleSelectEntry={(content) => router.push(getRouterRelativePath(site, content.url))}
					renderSidebar={() => <></>}
					renderHeader={() => <></>}
					renderContent={() => (
						<>
							<Document node={content.document} />
							<Clap
								className="mt-8"
								sessionClapCount={sessionCount}
								clapCount={totalCount}
								handleClap={() => onClap(content)}
							/>
						</>
					)}
					renderFooter={(site) => <Footer site={site} className="mx-auto" />}
					handleAddTagToQuery={(value) =>
						router.push(
							getRouterRelativePath(site, `/search?tags=${encodeURIComponent(JSON.stringify([value]))}`)
						)
					}
				/>
			</>
		</Page>
	);
}

export async function getServerSideProps({
	params,
	preview,
	previewData,
}: {
	params: { id: string; title: string };
	preview?: boolean;
	previewData?: any;
}) {
	try {
		const { content, before, after, site } = await fetchContent(config, params.id[0], {
			before: true,
			after: true,
			site: true,
			commit: preview ? previewData?.commit : undefined,
		});

		return {
			props: {
				content,
				site,
				before,
				after,
				preview: !!preview,
			},
		};
	} catch (ex: any) {
		if (ex.code === 404) {
			return {
				notFound: true,
			};
		}
		throw ex;
	}
}
