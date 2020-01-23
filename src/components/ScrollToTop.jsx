/** @format */

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = props => {
	useEffect(() => {
		// Keep default behavior of restoring scroll position when user:
		// - clicked back button
		// - clicked on a link that programmatically calls `history.goBack()`
		// - manually changed the URL in the address bar (here we might want
		// to scroll to top, but we can't differentiate it from the others)
		if (props.history.action === 'POP') {
			return;
		}
		// In all other cases, check fragment/scroll to top
		let hash = props.location.hash;
		console.log(hash);
		if (hash) {
			let element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ block: 'start', behavior: 'smooth' });
			}
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});

	return props.children;
};

export default withRouter(ScrollToTop);
