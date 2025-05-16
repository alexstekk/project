import type { Meta, StoryObj } from '@storybook/react';

import AddCommentForm from './AddCommentForm';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    decorators: [
        StoreDecorator({})
    ]
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onSendComment: () => {
        }
    }
};

