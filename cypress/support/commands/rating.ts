export const setRate = (starCount = 5, feedback = 'feedback') => {
    cy.getByTestId('StarRating.' + starCount).click()
    cy.getByTestId('RatingCard.Input').type(feedback)
    cy.getByTestId('RatingCard.Send').type(feedback)
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            setRate(starCount: number, feedback: string): Chainable<void>;
        }
    }
}