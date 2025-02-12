import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {ThemeProvider} from "app/providers/ThemeProvider";

describe('Sidebar', () => {

    test('Render test', () => {
        renderWithTranslation(<ThemeProvider>
            <Sidebar/>
        </ThemeProvider>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('Test collapsing with button', () => {
        renderWithTranslation(
            <ThemeProvider>
                <Sidebar/>
            </ThemeProvider>
        )
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})