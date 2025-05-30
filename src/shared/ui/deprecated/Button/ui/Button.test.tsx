import { render, screen } from '@testing-library/react';

import { ButtonDeprecated, ButtonVariants } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<ButtonDeprecated>TEST</ButtonDeprecated>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test Button theme: CLEAR', () => {
        render(
            <ButtonDeprecated variant={ButtonVariants.CLEAR}>
                TEST
            </ButtonDeprecated>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
