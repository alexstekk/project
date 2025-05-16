import type { Meta, StoryObj } from '@storybook/react';

import ArticlePage from './ArticlesPage';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'pages/ArticlesPage',
    component: ArticlePage,
    decorators: [StoreDecorator({}),]
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

