import { SubscribeForm } from '@pinpt/react';
import config from '../../pinpoint.config';

const Form = () => {
	return (
		<div className="mt-10 border p-5 max-w-[410px] rounded bg-gray-100 shadow-xl">
			<div className="text-[#2b3e7a] mb-4 font-semibold">Subscribe to get notified of new posts from Jeff</div>
			<SubscribeForm config={config} />
		</div>
	);
};

export default Form;
