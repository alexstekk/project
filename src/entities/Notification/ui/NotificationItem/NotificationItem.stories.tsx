import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const item: Notification = {
    'id': '1',
    'title': 'Уведомление 1',
    'description': 'Произошло какое-то событие',
    'userId': '1'
};

const meta = {
    title: 'Entities/NotificationItem',
    component: NotificationItem,
    decorators: []
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        item
    }
};

