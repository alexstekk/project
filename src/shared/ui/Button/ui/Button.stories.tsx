import type {Meta, StoryObj} from '@storybook/react';

import {Button, ButtonVariants} from './Button';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta = {
    title: 'shared/Button',
    component: Button,
    decorators: []
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    }
};

Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.CLEAR
    },
};
export const Outline: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.OUTLINE
    },
};
