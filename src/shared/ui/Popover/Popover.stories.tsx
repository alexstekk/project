import type { Meta, StoryObj } from '@storybook/react';

import { PopoverComp } from './Popover';

const meta = {
    title: 'Shared/Popover',
    component: PopoverComp,
    decorators: [],
} satisfies Meta<typeof PopoverComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
