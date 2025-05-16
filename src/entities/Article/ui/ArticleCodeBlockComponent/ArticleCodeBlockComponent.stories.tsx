import type { Meta, StoryObj } from '@storybook/react';

import { ArticleBlockType } from '../../model/consts/articleConsts';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';



const meta = {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    decorators: []
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        block: {
            'id': '4',
            'type': ArticleBlockType.CODE,
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        }
    }
};

