import type { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './Drawer';


const meta = {
    title: 'FIX/Drawer',
    component: Drawer,
    decorators: []
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

