import type { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [
        StoreDecorator({}),
    ]
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {}
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

