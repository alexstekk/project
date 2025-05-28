import type { Meta, StoryObj } from '@storybook/react';

import { InvertedDeprecated } from '../../AppLink/AppLink.stories';

import { ButtonDeprecated, ButtonSize, ButtonVariants } from './Button';


const meta = {
    title: 'shared/Button',
    component: ButtonDeprecated,
    decorators: [],
} satisfies Meta<typeof ButtonDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDeprecated: Story = {
    args: {
        children: 'Text',
    },
};

export const ClearDeprecated: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.CLEAR,
    },
};

export const ClearInvertedDeprecated: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.CLEAR_INVERTED,
    },
};

export const OutlineDeprecated: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.OUTLINE,
    },
};

export const BackgroundDeprecated: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.BACKGROUND,
    },
};
export const BackgroundInvertedDeprecated: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariants.BACKGROUND_INVERTED,
    },
};

export const SquareMDeprecated: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export const SquareLDeprecated: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export const SquareXLDeprecated: Story = {
    args: {
        children: '>',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const SizeMDeprecated: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};
export const SizeLDeprecated: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};
export const SizeXLDeprecated: Story = {
    args: {
        children: 'Test1',
        variant: ButtonVariants.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

export const DisabledDeprecated: Story = {
    args: {
        children: 'Test',
        variant: ButtonVariants.OUTLINE,
        disabled: true,
    },
};
