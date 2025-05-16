import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

import { Theme } from '@/shared/const/theme';


const meta = {
    title: 'shared/Code',
    component: Code,
    args: {
        text: 'import type { Meta, StoryObj } from \'@storybook/react\';\n' +
            '\n' +
            'import { Code } from \'./Code\';\n' +
            '\n' +
            '\n' +
            'const meta = {\n' +
            '    title: \'FIX/Code\',\n' +
            '    component: Code,\n' +
            '    decorators: []\n' +
            '} satisfies Meta<typeof Code>;\n' +
            '\n' +
            'export default meta;\n' +
            'type Story = StoryObj<typeof meta>;'
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const Orange: Story = {
    decorators: [
        ThemeDecorator(Theme.ORANGE)
    ]
};

