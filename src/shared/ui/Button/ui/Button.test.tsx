import { Button } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';
import { ButtonVariants } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test Button theme: CLEAR', () => {
        render(<Button variant={ButtonVariants.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});