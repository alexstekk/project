import {ReactNode} from "react";
import {render} from "@testing-library/react";
import {I18nextProvider} from "react-i18next";
import i18nForTest from "shared/config/i18n/i18nForTest";
import {MemoryRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";


export interface ComponentRenderOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {

    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter
            initialEntries={[route]}
        >
            <ThemeProvider>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </ThemeProvider>
        </MemoryRouter>
    );
}