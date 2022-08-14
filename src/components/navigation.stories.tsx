import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from './navigation';

export default {
	title: 'Navigation',
	component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: [
		{ url: '', label: 'Home' },
		{ url: '', label: 'About' },
		{ url: '', label: 'Contact' },
	],
};
