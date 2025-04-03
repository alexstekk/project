import type { Meta, StoryObj } from '@storybook/react';

import ArticlePage from './ArticlesPage';


const meta = {
    title: 'FIX/ArticlesPage',
    component: ArticlePage,
    decorators: []
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

