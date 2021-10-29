import { PoweredByPinpoint } from '@pinpt/react';
import SubscribeForm from '../Subscribe';

import type { ISite } from '@pinpt/react';

export interface FooterProps {
	site: ISite;
	className?: string;
	noSubscribe?: boolean;
}

const Footer = (props: FooterProps) => {
	const { className = 'bg-white -mt-10 px-10', noSubscribe = false } = props;
	return (
		<div className={className}>
			{!noSubscribe && <SubscribeForm />}
			<footer className="my-10 py-4 text-sm text-gray-400 flex flex-col lg:!flex-row w-full border-t">
				<div className="self-center">All content is &copy; Jeff Haynie.</div>
				<div className="self-center pt-4 lg:pt-0 lg:ml-auto">
					<PoweredByPinpoint siteId={props.site.id} />
				</div>
			</footer>
		</div>
	);
};

export default Footer;
