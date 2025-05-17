let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {

    beforeEach(() => {
        cy.login();
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`)
        })
    })

    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })

    it.skip('И статья открывается', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })

    it.skip('И открывается список рекомендованных статей', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })

    it.skip('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('test');
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })

    it('И ставит оценку', () => {
        cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'})
        cy.getByTestId('ArticleDetails.Info').should('exist')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})