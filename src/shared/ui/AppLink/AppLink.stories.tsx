import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Link to',
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary'
    }
};

export const Inverted: Story = {
    args: {
        variant: 'inverted'
    }
};

export const PrimaryDark: Story = {
    args: {
        variant: 'primary'
    }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark: Story = {
    args: {
        variant: 'inverted'
    }
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];




