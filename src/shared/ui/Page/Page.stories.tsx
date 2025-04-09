import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';


const meta = {
    title: 'FIX/Page',
    component: Page,
    decorators: []
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: (<div>test</div>)
    }
};

