import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';


const meta = {
    title: 'FIX/ListBox',
    component: ListBox,
    decorators: []
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

