import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
    title: 'Shared/Flex',
    component: Flex,
    decorators: [],
    args: {
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
            </>
        ),
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const gap4: Story = {
    args: {
        gap: '4',
    },
};
export const gap8: Story = {
    args: {
        gap: '8',
    },
};
export const gap16: Story = {
    args: {
        gap: '16',
    },
};
export const gap32: Story = {
    args: {
        gap: '32',
    },
};
