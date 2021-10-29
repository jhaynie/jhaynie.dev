import { ISite } from '@pinpt/react';

export interface HeaderProps {
	site: ISite;
	noSubscribe?: boolean;
}

const Header = (props: HeaderProps) => {
	if (props.noSubscribe) {
		return <div className="">&nbsp;</div>;
	}
	return <></>;
};

export default Header;
