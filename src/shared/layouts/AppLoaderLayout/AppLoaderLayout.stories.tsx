import type { Meta, StoryObj } from '@storybook/react';

import { AppLoaderLayout } from './AppLoaderLayout';

const meta = {
    title: 'FIX/AppLoaderLayout',
    component: AppLoaderLayout,
    decorators: [],
} satisfies Meta<typeof AppLoaderLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
