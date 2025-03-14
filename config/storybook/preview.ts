import type {Preview} from "@storybook/react";

import {StyleDecorator} from "../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from "../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator";
import {StoreDecorator} from "../../src/shared/config/storybook/decorators/StoreDecorator/StoreDecorator";


const preview: Preview = {
    decorators: [
        StyleDecorator,
        StoreDecorator({}),
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
