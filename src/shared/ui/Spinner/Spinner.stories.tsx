import type {Meta, StoryObj} from '@storybook/react';
import {Spinner} from "./Spinner";
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/Spinner',
    component: Spinner,
} satisfies Meta<typeof Spinner>;

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

