import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: 'Alex',
                    lastname: 'Stekk',
                    age: 34,
                    city: 'Krasnodar',
                    username: 'admin',
                    avatar: '',
                },
            },
        }),
    ],
    args: {
        id: '1',
    },
    parameters: {
        mockData: [
            {
                url: __API__ + '/profile/' + '1',
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
