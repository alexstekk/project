import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from '../../entities/Article/model/consts/articleConsts';

import { ArticleTypeTabs } from './ArticleTypeTabs';


const meta = {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    decorators: []
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: action('onChangeType'),
    }
};

