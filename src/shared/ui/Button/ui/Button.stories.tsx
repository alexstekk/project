import type {Meta, StoryObj} from '@storybook/react';

import {Button, ButtonSize, ButtonVariants} from './Button';


const meta = {
    title: 'shared/Button',
    component: Button,
    decorators: []
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    }
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.CLEAR
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.CLEAR_INVERTED,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.OUTLINE
    },
};

export const Background: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.BACKGROUND
    },
};
export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.BACKGROUND_INVERTED
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareL: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareXL: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const SizeM: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};
export const SizeL: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};
export const SizeXL: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};


