import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
    title: 'FIX/ScrollToTopButton',
    component: ScrollToTopButton,
    decorators: [],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
