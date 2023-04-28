
Cypress.Commands.add('getPosts', () => {
    return cy.request(`https://jsonplaceholder.typicode.com/posts`).its('status').should('equal', 200)
})

Cypress.Commands.add('getPostsById', (id) => {
    return cy.request(`https://jsonplaceholder.typicode.com/posts/${id}`)
})