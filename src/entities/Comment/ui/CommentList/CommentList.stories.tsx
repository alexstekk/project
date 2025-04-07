import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';


const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    decorators: []
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {}
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
                    avatar: 'https://s.digitalocean.ru/627/upload/1704804178_ZDWsxDYgwxo.jpg'
                }
            }, {
                id: '2',
                text: 'hello world 2',
                user: {
                    id: '2',
                    username: 'Erjan',
                    avatar: 'https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg'
                }
            },
        ]
    }
};

export const Loading: Story = {
    args: {
        isLoading: true,
    }
};

