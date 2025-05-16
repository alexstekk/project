import {Preview} from '@storybook/react';

import {StyleDecorator} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import {SuspenceDecorator} from "../../src/shared/config/storybook/decorators/SuspenceDecorator/SuspenceDecorator";
import {Theme} from '@/shared/const/theme';
import {withThemeByClassName} from "@storybook/addon-themes";


const preview: Preview = {
    decorators: [
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenceDecorator,
        withThemeByClassName({
            themes: {
                light: 'app ' + Theme.LIGHT,
                dark: 'app ' + Theme.DARK,
                orange: 'app ' + Theme.ORANGE,
            },
            defaultTheme: 'light',
        }),
    ],
    parameters: {
        layout: 'fullscreen',
    },
};

export default preview;
