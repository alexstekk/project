import type {Preview} from "@storybook/react";

import {StyleDecorator} from "../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator";


const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
