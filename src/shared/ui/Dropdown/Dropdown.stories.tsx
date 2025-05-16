import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';


const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: []
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

