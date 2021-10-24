import { GithubLink, InstagramLink, LinkedInLink, SocialMediaBar, TwitterLink } from '@pinpt/react';

const Social = ({ className = 'wide' }: { className?: string }) => {
	return (
		<SocialMediaBar className={className}>
			<GithubLink href="https://github.com/jhaynie" />
			<LinkedInLink href="https://linkedin.com/in/jhaynie" />
			<TwitterLink href="https://twitter.com/jhaynie" />
			<InstagramLink href="https://instagram.com/jhaynie" />
		</SocialMediaBar>
	);
};

export default Social;
