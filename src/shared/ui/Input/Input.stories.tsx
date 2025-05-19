import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Input',
    component: Input,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withPlaceholder: Story = {
    args: {
        value: 'Test input',
        placeholder: 'Placeholder',
    },
};

export const withoutPlaceholder: Story = {
    args: {
        value: 'Test input',
    },
};

export const withPlaceholderDark: Story = {
    args: {
        value: 'Test input',
        placeholder: 'Placeholder',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
