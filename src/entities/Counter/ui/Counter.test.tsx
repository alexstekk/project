import { userEvent } from '@storybook/test';
import { screen } from '@testing-library/react';

import { Counter } from './Counter';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';


describe('Counter', () => {
    test('Render test', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('Decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
