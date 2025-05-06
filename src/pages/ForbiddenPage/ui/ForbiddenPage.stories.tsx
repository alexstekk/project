import type { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator/StoreDecorator';


const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [
        StoreDecorator({}),
    ]
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {}
};



