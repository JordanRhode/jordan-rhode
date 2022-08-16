export type NavigationItem = {
	label: string;
	url: string;
};

export function Navigation({ items }: { items: NavigationItem[] }) {
	return (
		<div className="grid grid-cols-2 min-w-full mb-5">
			<div className="mt-[-1px] border-gray-500 border w-72 h-16 place-content-center grid ml-16">
				<p className="text-3xl font-mono">
					$ jordan rhode<span className="animate-blink">_</span>
				</p>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-self-end mr-16">
				{items.map((item, index) => (
					<a key={index} href={item.url} className="text-3xl underline underline-offset-8 hover:text-gray-600">
						{item.label}
					</a>
				))}
			</div>
		</div>
	);
}
