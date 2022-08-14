export type NavigationItem = {
	label: string;
	url: string;
};

export function Navigation({ items }: { items: NavigationItem[] }) {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center gap-2">
			{items.map((item, index) => (
				<a key={index} href={item.url} className="text-lg hover:text-gray-600">
					{item.label}
				</a>
			))}
		</div>
	);
}
