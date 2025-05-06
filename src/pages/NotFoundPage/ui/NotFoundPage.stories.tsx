import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [
        StoreDecorator({}),
    ]
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {}
};


