import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { Comment } from 'entities/Comment';

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
    title: 'FIX/CommentCard',
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

