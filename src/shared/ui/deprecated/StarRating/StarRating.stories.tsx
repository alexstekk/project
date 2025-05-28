import type { Meta, StoryObj } from '@storybook/react';

import { InvertedDeprecated } from '../AppLink/AppLink.stories';

import { StarRating } from './StarRating';


const meta = {
    title: 'shared/StarRating',
    component: StarRating,
    decorators: [],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalDeprecated: Story = {
    args: {},
};
