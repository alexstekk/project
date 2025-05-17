import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'shared/Page',
    component: Page,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div>test</div>,
    },
};
