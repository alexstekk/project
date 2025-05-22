import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const M: Story = {
    args: {
        size: 'sizeM',
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const L: Story = {
    args: {
        size: 'sizeL',
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyText: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        variant: 'error',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
