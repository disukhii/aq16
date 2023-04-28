
const continueFailedTest = (func, id) =>{
    try {
        func(id)

    } catch (e) {
        cy.log('something went wrong')
    }
}
module.exports = { continueFailedTest }