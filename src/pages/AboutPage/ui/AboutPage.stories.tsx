import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from './AboutPage';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';


const meta = {
    title: 'pages/AdminPanelPage',
    component: AboutPage,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof AboutPage>;

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
