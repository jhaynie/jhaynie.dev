import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CircleIcon = ({
	icon,
	size = 'w-12 h-12',
	selected = false,
}: {
	icon: IconDefinition;
	size?: string;
	selected?: boolean;
}) => {
	return (
		<div
			className={`${size} rounded-full transition duration-1000 ${
				selected ? 'bg-blue-900' : ''
			} hover:bg-blue-900 border-2 border-white flex items-center justify-center mr-4`}
		>
			<FontAwesomeIcon icon={icon} className="text-white" fixedWidth />
		</div>
	);
};
export default CircleIcon;
