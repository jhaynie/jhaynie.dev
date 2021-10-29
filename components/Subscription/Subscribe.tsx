import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import {
	getRouterRelativePath, ISite, PrebuiltSubscriptionSubscribe, useSubscriptionCreator
} from '@pinpt/react';
import config from '../../pinpoint.config';
import Footer from '../Footer';
import Header from '../Header';

const SubscriptionSubscribe = ({ site }: { site: ISite }) => {
	const router = useRouter();
	const { query } = useSubscriptionCreator(site);
	const [pending, setPending] = useState(false);

	const handleSubmit = useCallback(
		async (email: string) => {
			try {
				setPending(true);
				const res = await query(email, config);
				return res.subscribed;
			} finally {
				setPending(false);
			}
		},
		[query]
	);

	return (
		<PrebuiltSubscriptionSubscribe
			site={site}
			renderHeader={(site) => <Header site={site} noSubscribe />}
			renderFooter={(site) => <Footer site={site} noSubscribe />}
			handleSelectHome={() => router.push(getRouterRelativePath(site, '/'))}
			className="flex flex-col !w-full h-screen"
			contentClassName="self-center"
			handleSubmit={handleSubmit}
			pending={pending}
		/>
	);
};

export default SubscriptionSubscribe;
