import type {Preview} from '@storybook/react';

import {StyleDecorator} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import {Theme} from '../../src/app/providers/ThemeProvider';
import {SuspenceDecorator} from "../../src/shared/config/storybook/decorators/SuspenceDecorator/SuspenceDecorator";


const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenceDecorator,
    ],
};

export default preview;
