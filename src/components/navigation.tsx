import { NavigationLink } from './navigation-link';

export function Navigation({ links }: { links: NavigationLink[] }) {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-self-end mr-16">
			{links.map((link, index) => (
				<a key={index} href={link.url} className="text-3xl hover:text-gray-600">
					{link.label}
				</a>
			))}
		</div>
	);
}
