let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login('testuser', '123').then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'Alexander',
        );
    });

    it('И редактирует', () => {
        const newFirst = 'testFirstname';
        const newLast = 'testLastname';
        cy.updateProfile(newFirst, newLast);
        cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirst);
        cy.getByTestId('ProfileCard.Lastname').should('have.value', newLast);
    });
});
