import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/consts/articleConsts';


const meta = {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSelector,
    decorators: []
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.SMALL
    }
};

