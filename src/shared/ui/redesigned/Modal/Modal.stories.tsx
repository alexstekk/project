import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus, eveniet, ex ipsa ipsam laborum maxime nam, natus necessitatibus neque porro quis repellendus sapiente sit sunt tempore vero voluptatum?\n',
        isOpen: true,
    },
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
