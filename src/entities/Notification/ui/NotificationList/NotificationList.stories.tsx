import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    decorators: [
        StoreDecorator({})
    ],
    parameters: {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'notification',
                        description: 'description'
                    }
                ],
            },
        ],
    },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

