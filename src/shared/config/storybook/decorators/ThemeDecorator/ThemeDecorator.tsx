import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { Decorator } from '@storybook/react';


export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {

    return <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>;
};