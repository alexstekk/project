// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved
import { User } from '../../../src/entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
// eslint-disable-next-line import/no-unresolved
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
    username: string = 'testuser',
    password: string = '123',
) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(body),
        );
        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            // dataCy(value: string): Chainable<JQuery<HTMLElement>>

            login(email?: string, password?: string): Chainable<User>;

            getByTestId(testId?: string): ReturnType<typeof cy.get>;
        }
    }
}
