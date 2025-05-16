import { FunctionComponent } from 'react';

// eslint-disable-next-line alexstekk/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';


export const ThemeDecorator = (theme: Theme) => (Story: FunctionComponent) => {

    return <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story/>
        </div>
    </ThemeProvider>;
};

