import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Text } from '@/shared/ui/Text/Text';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';


const meta = {
    title: 'shared/Card',
    component: Card,
    decorators: []
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title={'Hello world'} text={'Hi hello'}/>
    }
};
export const Dark: Story = {
    args: {
        children: <Text title={'Hello world'} text={'Hi hello'}/>
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

