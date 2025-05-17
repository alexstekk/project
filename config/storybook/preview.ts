import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { withDisabledAnimations } from '../../src/shared/config/storybook/decorators/DisabledAnimationsDecorator/DisabledAnimationsDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import { SuspenceDecorator } from '../../src/shared/config/storybook/decorators/SuspenceDecorator/SuspenceDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        // ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenceDecorator,
        withDisabledAnimations,
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
