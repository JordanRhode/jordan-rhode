import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabelScanner from './label-scanner';

export default {
	title: 'LabelScanner',
	component: LabelScanner,
} as ComponentMeta<typeof LabelScanner>;

const Template: ComponentStory<typeof LabelScanner> = () => <LabelScanner />;

export const Default = Template.bind({});
Default.args = {
	default: true,
};
