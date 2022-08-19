import classNames from 'classnames';
import { useReducer } from 'react';
import { NavigationLink } from './navigation-link';
import { ReactComponent as MenuSVG } from '../media/menu.svg';

export function Header() {
	const links: NavigationLink[] = [
		{ label: 'home', url: '/' },
		{ label: 'scan', url: '/scan' },
	];
	const [navVisible, toggleNav] = useReducer((state) => !state, false);

	return (
		<>
			<div className="hidden lg:grid grid-cols-2 ml-16 mr-16">
				<a href="/" className="grid place-content-center w-72 h-16 border border-theme-cream mt-[-1px]">
					<p className="text-3xl font-mono">
						$ jordan rhode<span className="animate-blink">_</span>
					</p>
				</a>
				<div className="flex place-content-end">
					<div className="flex flex-row items-center gap-4">
						{links.map((link, index) => (
							<a key={index} href={link.url} className="text-3xl hover:text-gray-600">
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="lg:hidden grid">
				<div className="w-60 md:w-72 justify-self-center">
					<a href="/" className="mt-[-1px] border-theme-cream border w-60 md:w-72 h-16 place-content-center grid">
						<p className="text-2xl md:text-3xl font-mono">
							$ jordan rhode<span className="animate-blink">_</span>
						</p>
					</a>
					<div className="absolute right-4 top-4 md:right-5 md:top-5">
						<button type="button" onClick={toggleNav}>
							<MenuSVG className="w-8 h-8 fill-theme-cream" />
						</button>
					</div>
				</div>
			</div>
			<div
				className={classNames(
					'absolute top-16 bottom-0 min-w-full bg-theme-blue z-10',
					navVisible ? 'grid' : 'hidden'
				)}>
				<div className="flex flex-col gap-2 text-center mt-5">
					{links.map((link, index) => (
						<a key={index} href={link.url} className="text-2xl hover:text-gray-600">
							{link.label}
						</a>
					))}
				</div>
			</div>
		</>
	);
}
