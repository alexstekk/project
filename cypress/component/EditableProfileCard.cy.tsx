import React from "react";
// eslint-disable-next-line import/no-unresolved
import {EditableProfileCard} from "../../src/features/editableProfileCard";
// eslint-disable-next-line import/no-unresolved
import {TestProvider} from "../../src/shared/lib/tests/componentRender/componentRender";

const USER_ID = '4'

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', {fixture: 'profile.json'})
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: USER_ID
                        }
                    }
                }
            }}>
                <EditableProfileCard id={USER_ID}/>
            </TestProvider>
        )
    })
})