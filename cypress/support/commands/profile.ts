export const updateProfile = (first: string, last: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.Firstname').clear().type(first)
    cy.getByTestId('ProfileCard.Lastname').clear().type(last)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {Authorization: '123'},
        body: {
            "id": "4",
            "first": "Alexander",
            "lastname": "Stekk",
            "age": 341111,
            "currency": "RUB",
            "country": "Russia",
            "city": "Krasnodar",
            "username": "admin",
            "avatar": "https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg"
        },
    });
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, last: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}