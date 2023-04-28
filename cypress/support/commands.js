
Cypress.Commands.add('getPosts', () => {
    return cy.request(`https://jsonplaceholder.typicode.com/posts`,)
})

Cypress.Commands.add('getPostsById', (id) => {
    return cy.request(`https://jsonplaceholder.typicode.com/posts/${id}`,)
})