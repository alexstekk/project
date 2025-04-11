import type { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';


const meta = {
    title: 'FIX/ArticleEditPage',
    component: ArticleEditPage,
    decorators: []
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

