import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    decorators: [StoreDecorator({
            user: {
                authData: {
                    id: '1', username: 'admin'
                }
            },
            loginForm: {},
            counter: {}
        }
    )
    ]
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const withAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ]
};




