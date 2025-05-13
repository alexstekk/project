import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';

const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    decorators: [],
     args: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};