import {Preview} from '@storybook/react';

import {StyleDecorator} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import {SuspenceDecorator} from "../../src/shared/config/storybook/decorators/SuspenceDecorator/SuspenceDecorator";
import {Theme} from '@/shared/const/theme';


const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenceDecorator,
    ],
    parameters: {
        layout: 'fullscreen',
    }
};

export default preview;
