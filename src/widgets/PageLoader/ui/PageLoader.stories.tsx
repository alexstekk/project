import type {Meta, StoryObj} from '@storybook/react';
import {PageLoader} from "./PageLoader";
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
    }
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
    args: {
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

