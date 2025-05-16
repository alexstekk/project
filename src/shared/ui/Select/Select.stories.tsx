import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';


const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'test',
        options: [
            { value: '1', content: 'Первый' },
            { value: '2', content: 'Второй' },
            { value: '3', content: 'Третий длинный пункт' },
        ]
    },
};




