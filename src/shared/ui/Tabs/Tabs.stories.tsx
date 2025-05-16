import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    decorators: [],
    args: {
        tabs: [
            {
                value: '1',
                content: '1'
            },
            {
                value: '2',
                content: '2'
            },
            {
                value: '3',
                content: '3'
            },
        ],
        value: '1',
        onTabClick: action('onTabClick')
    }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

