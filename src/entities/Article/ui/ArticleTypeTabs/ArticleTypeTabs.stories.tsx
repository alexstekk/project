import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '../../model/consts/articleConsts';
import { action } from '@storybook/addon-actions';


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

