import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
};

export const Dark: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
