import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
