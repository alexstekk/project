import type { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line alexstekk/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line alexstekk/layer-imports
import '@/app/styles/index.scss';


export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

export interface TestProviderProps {
    children?: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {

    const {
        children,
        options = {}
    } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <MemoryRouter
            initialEntries={[route]}
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers}>
                <ThemeProvider>
                    <I18nextProvider i18n={i18nForTest}>
                        <ThemeProvider>
                            <div className={`app ${theme}`}>
                                {children}
                            </div>
                        </ThemeProvider>
                    </I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}