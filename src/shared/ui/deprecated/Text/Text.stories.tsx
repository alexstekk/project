import type { Meta, StoryObj } from '@storybook/react';

import { InvertedDeprecated } from '../AppLink/AppLink.stories';

import { Text, TextSize, TextVariants } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightDeprecated: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarkDeprecated: Story = {
    args: {
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const MDeprecated: Story = {
    args: {
        size: TextSize.M,
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LDeprecated: Story = {
    args: {
        size: TextSize.L,
        text: 'Text',
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyTitleDeprecated: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const onlyTextDeprecated: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ErrorDeprecated: Story = {
    args: {
        text: 'Text',
        title: 'Title',
        variant: TextVariants.ERROR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
