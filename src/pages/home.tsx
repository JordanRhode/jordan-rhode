import { useReducer } from 'react';
import ReactGa from 'react-ga';

export default function Home() {
	document.title = 'Hello World | Jordan Rhode';
	ReactGa.pageview(window.location.pathname);
	return (
		<div className="mt-[-1px] ml-32 border-gray-500 border w-72 h-16 place-content-center grid">
			<p className="text-3xl font-mono">
				$ jordan rhode<span className="animate-blink">_</span>
			</p>
		</div>
	);
}
