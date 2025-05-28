import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/Country';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/decorators/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/decorators/NewDesignDecorator/NewDesignDecorator';
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
                    country: Country.RUSSIA,
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

export const NormalRedesigned: Story = {
    args: {},
    decorators: [NewDesignDecorator],
};
