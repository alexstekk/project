import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';


const meta = {
    title: 'FIX/CommentList',
    component: CommentList,
    decorators: []
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

