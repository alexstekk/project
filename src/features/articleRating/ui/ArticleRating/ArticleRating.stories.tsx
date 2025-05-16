import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' }
            }
        })
    ],
    parameters: {
        mockData: [
            {
                url: __API__ + '/articles-ratings' + '?userId=1' + '&articleId=1',
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    }
                ],
            },
        ],
    },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        articleId: '1'
    }
};

