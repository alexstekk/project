import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';


const meta = {
    title: 'FIX/ArticleRating',
    component: ArticleRating,
    decorators: []
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

