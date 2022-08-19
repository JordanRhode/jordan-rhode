import { Navigation } from './navigation';
import { NavigationMobile } from './navigation-mobile';

export function Header() {
	const links = {
		links: [
			{ label: 'home', url: '/' },
			{ label: 'scan', url: '/scan' },
		],
	};
	return (
		<div className="grid grid-cols-2 mb-5 min-w-[420px]">
			<a href="/" className="mt-[-1px] border-gray-500 border w-72 h-16 place-content-center grid ml-16">
				<p className="text-3xl font-mono">
					$ jordan rhode<span className="animate-blink">_</span>
				</p>
			</a>
			<span className="hidden lg:flex place-content-end">
				<Navigation {...links} />
			</span>
			<span className="flex lg:hidden place-self-end">
				<NavigationMobile {...links} />
			</span>
		</div>
	);
}
