import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '../../model/consts/articleConsts';
import { action } from '@storybook/addon-actions';
import { SortOrder } from 'shared/types';


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

