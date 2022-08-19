import { useReducer } from 'react';
import { ReactComponent as MenuSVG } from '../media/menu.svg';
import { NavigationLink } from './navigation-link';
import classNames from 'classnames';

export function NavigationMobile({ links }: { links: NavigationLink[] }) {
	const [navVisible, toggleNav] = useReducer((state) => !state, false);
	return (
		<div className="flex flex-col place-items-end h-16">
			<button type="button" onClick={toggleNav}>
				<MenuSVG className="w-8 h-8 fill-theme-cream m-4" />
			</button>
			<div
				className={classNames(
					'flex flex-col gap-2 text-right p-4 pt-0 bg-theme-blue',
					navVisible ? 'opacity-100' : 'opacity-0'
				)}>
				{links.map((link, index) => (
					<a key={index} href={link.url} className="text-2xl hover:text-gray-600">
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
}
