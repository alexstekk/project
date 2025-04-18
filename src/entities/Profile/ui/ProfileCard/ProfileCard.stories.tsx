import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            first: 'Alex',
            lastname: 'Stekk',
            age: 34,
            city: 'Krasnodar',
            username: 'admin',
            avatar: 'https://img.hhcdn.ru/photo/781488069.jpeg?t=1743661063&h=YQvddqwuFpqFEXTmorYcVw',
        }
    }
} satisfies Meta<typeof ProfileCard>;

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
    args: {
        error: 'error',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const withLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
