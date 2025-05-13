import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';
import { FunctionComponent } from 'react';


export const ThemeDecorator = (theme: Theme) => (Story: FunctionComponent) => {

    return <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>;
};

