import { pageview } from 'react-ga';

export default function Home() {
	document.title = 'Home | JR';
	pageview(window.location.pathname);

	return (
		<>
			<p className="text-xl text-center">{'//'} todo</p>
		</>
	);
}
