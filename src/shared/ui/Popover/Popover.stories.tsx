import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';


const meta = {
    title: 'Shared/Popover',
    component: Popover,
    decorators: []
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

