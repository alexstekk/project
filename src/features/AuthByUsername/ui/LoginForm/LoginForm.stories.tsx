import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';


const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [
        StoreDecorator({
            loginForm: {
                username: '123',
                password: 'asd',
            }
        })
    ]
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {}
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const withError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                error: 'Error',
                username: '555',
                password: 'nnn',
            }
        })]
};

export const isLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true
            }
        })]
};