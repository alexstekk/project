import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    decorators: [],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {},
};

export const Comments: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: {
                    id: '1',
                    username: 'Vasya',
                    avatar: '',
                },
            },
            {
                id: '2',
                text: 'hello world 2',
                user: {
                    id: '2',
                    username: 'Erjan',
                    avatar: '',
                },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
