export type NavigationItem = {
	label: string;
	url: string;
};

export function Navigation({ items }: { items: NavigationItem[] }) {
	return (
		<>
			{items.map((item, index) => (
				<div key={index}>
					<a href={item.url}>{item.label}</a>
				</div>
			))}
		</>
	);
}
