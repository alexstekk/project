import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';


const meta = {
    title: 'FIX/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    decorators: []
} satisfies Meta<typeof ArticleDetailsPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

