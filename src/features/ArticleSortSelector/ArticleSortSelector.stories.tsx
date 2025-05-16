import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField } from '../../entities/Article/model/consts/articleConsts';

import { ArticleSortSelector } from './ArticleSortSelector';

import { SortOrder } from '@/shared/types';


const meta = {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,
    decorators: []
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticleSortField.VIEWS,
        order: 'asc' as SortOrder,
        onChangeOrder: action('onChangeOrder'),
        onChangeSortField: action('onChangeSortField'),
    }
};

