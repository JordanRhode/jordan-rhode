import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from './navigation';
import { NavigationMobile } from './navigation-mobile';

export default {
	title: 'Navigation',
	component: NavigationMobile,
} as ComponentMeta<typeof NavigationMobile>;

const Template: ComponentStory<typeof NavigationMobile> = (args) => <NavigationMobile {...args} />;

export const Mobile = Template.bind({});
Mobile.args = {
	links: [
		{ url: '', label: 'Home' },
		{ url: '', label: 'About' },
		{ url: '', label: 'Contact' },
	],
};
