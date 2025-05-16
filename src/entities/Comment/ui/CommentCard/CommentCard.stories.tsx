import type { Meta, StoryObj } from '@storybook/react';

import { Comment } from '../../model/types/Comment';

import { CommentCard } from './CommentCard';

const comment: Comment =
    {
        id: '1',
        text: 'texzt asda',
        user: {
            id: '1',
            username: 'alexstekk'
        }
    };

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    decorators: []
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment,
    }
};

export const Loading: Story = {
    args: {
        comment,
        isLoading: true,
    }
};
export const WithAvatar: Story = {
    args: {
        comment: {
            ...comment,
            user: {
                ...comment.user,
                avatar: 'https://s.digitalocean.ru/627/upload/1704804178_ZDWsxDYgwxo.jpg'
            }

        },
    }
};

