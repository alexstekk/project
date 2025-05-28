import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '../../../assets/tests/storybook.jpeg';

import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        size: 50,
    },
};
