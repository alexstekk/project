import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';


const meta = {
    title: 'shared/Input',
    component: Input,
    decorators: []
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withPlaceholder: Story = {
    args: {
        value: 'Test input',
        placeholder: 'Placeholder'
    }
};

export const withoutPlaceholder: Story = {
    args: {
        value: 'Test input',
    }
};

export const withPlaceholderDark: Story = {
    args: {
        value: 'Test input',
        placeholder: 'Placeholder'
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};



