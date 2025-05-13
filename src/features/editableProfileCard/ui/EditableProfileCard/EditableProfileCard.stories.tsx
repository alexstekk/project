import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    decorators: [
        StoreDecorator({}),
    ],
    args: {
        id: '1'
    },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};