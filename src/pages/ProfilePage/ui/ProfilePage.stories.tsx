import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import avatar from '@/shared/assets/tests/storybook.jpeg';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    first: 'Alex',
                    lastname: 'Stekk',
                    age: 34,
                    city: 'Krasnodar',
                    username: 'admin',
                    avatar,
                }
            }
        })
    ]
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const withError: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const withLoading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};
