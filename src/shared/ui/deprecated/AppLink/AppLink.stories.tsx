import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Link to',
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDeprecated: Story = {
    args: {
        variant: 'primary',
    },
};

export const InvertedDeprecated: Story = {
    args: {
        variant: 'inverted',
    },
};

export const PrimaryDarkDeprecated: Story = {
    args: {
        variant: 'primary',
    },
};
PrimaryDarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDarkDeprecated: Story = {
    args: {
        variant: 'inverted',
    },
};
InvertedDarkDeprecated.decorators = [ThemeDecorator(Theme.DARK)];
