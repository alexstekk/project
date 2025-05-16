import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/articleConsts';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';




const meta = {
    title: 'entities/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    decorators: []
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        block: {
            'id': '2',
            'type': ArticleBlockType.IMAGE,
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        }
    }
};

