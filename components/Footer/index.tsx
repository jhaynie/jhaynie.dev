import { PoweredByPinpoint } from '@pinpt/react';
import SubscribeForm from '../Subscribe';

import type { ISite } from '@pinpt/react';

export interface FooterProps {
	site: ISite;
	className?: string;
}

const Footer = (props: FooterProps) => {
	const { className = 'bg-white -mt-10 px-10' } = props;
	return (
		<div className={className}>
			<SubscribeForm />
			<footer className="my-10 py-4 text-sm text-gray-400 flex items-center justify-between w-full border-t">
				<div>All content is &copy; Jeff Haynie.</div>
				<div className="ml-auto">
					<PoweredByPinpoint siteId={props.site.id} />
				</div>
			</footer>
		</div>
	);
};

export default Footer;
