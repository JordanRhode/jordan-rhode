import ReactGa from 'react-ga';

export default function Home() {
	document.title = 'Hello World | Jordan Rhode';
	ReactGa.pageview(window.location.pathname);

	return (
		<div className="flex place-content-center">
			<p className="text-8xl font-mono">{'>'} hello world</p>
		</div>
	);
}
