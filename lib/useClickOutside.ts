import { useEffect, useRef } from 'react';

// https://usehooks.com/useOnClickOutside/

const useClickOutside = (ref: any, handler: (event: any) => void, dependencies: any[] = []) => {
	const listener = useRef<any>();

	useEffect(
		() => {
			if (listener.current) {
				document.removeEventListener('mousedown', listener.current);
				document.removeEventListener('touchstart', listener.current);
			}
			listener.current = (event: any) => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref?.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};

			document.addEventListener('mousedown', listener.current, { passive: false });
			document.addEventListener('touchstart', listener.current, { passive: false });

			return () => {
				document.removeEventListener('mousedown', listener.current);
				document.removeEventListener('touchstart', listener.current);
				listener.current = null;
			};
		},
		// Add ref and handler to effect dependencies
		// It's worth noting that because passed in handler is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap handler in useCallback before ...
		// ... passing it into this hook.
		[ref, handler, dependencies]
	);
};

export default useClickOutside;
