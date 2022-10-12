import React from 'react';
import Center from './Center';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Center,
  title: 'Center',
} as ComponentMeta<typeof Center>;

const Template: ComponentStory<typeof Center> = (args) => <Center {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Center',
};
