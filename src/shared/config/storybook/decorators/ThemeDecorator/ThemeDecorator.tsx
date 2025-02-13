import {Theme, ThemeProvider} from "app/providers/ThemeProvider";
import {Decorator} from "@storybook/react";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>


)