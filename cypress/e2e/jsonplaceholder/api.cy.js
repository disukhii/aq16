const jsonAssertion = require("soft-assert") // softAssertion didn't help me


describe('JSON place holder', () => {
    const amountOfTry = 120, greater = 300

    // task #1
    it('GET json and check that it is an object', () => {
        cy.request(`https://jsonplaceholder.typicode.com/posts`)
            .its('body').then((response) => {
                for(let i = 0; i < response.length; i++){
                    expect(typeof response[i].userId).to.eq('number')
                    expect(typeof response[i]).to.eq('object')
                }
        })
    })

    // task #2
        // I don't know if anyone does this, but this is the only option that works)
    for(let i = 1; i < amountOfTry; i++){
        it(`GET json and check that it is an object (try number ${i})`, () => {
            cy.request(`https://jsonplaceholder.typicode.com/posts/${i}`)
                .its('body').then((response) => {
                expect(typeof response.body).to.eq('string')
                expect(response.body.length).to.greaterThan(greater)
            })
        })
    }

    // cy.on('fail') doesn't work ...
    // I mean - cy.on('fail', (error, runnable) => {
    //   console.error('Failed:', error.message)
    //   console.error(error.stack)
    //
    //
    //
    //   throw error
    // })

    /*
    // catch() not working, actually // TASK #2 !!!!!!

    it('GET json and check that it is an object ', async () => {
        let amountOfFailedTests = 0;
        for (let i = 1; i < amountOfTry; i++) {
            cy.wrap(i).then((index) => {
                cy.request(`https://jsonplaceholder.typicode.com/posts/${index}`)
                    .its('body').then((response) => {
                    expect(typeof response.body).to.eq('string')
                    expect(response.body.length).to.greaterThan(greater)
                }).catch((error) => {   // chainable
                    amountOfFailedTests++;
                    console.log(error)
                })
            })
        }
    });
    */

    /*

    // here if /posts/102+ then there will be a fail on the first error
    it('GET json and check that it is an object', () => {
        let amountOfFailedTests = 0;
        for (let i = 1; i < amountOfTry; i++) {
            cy.request(`https://jsonplaceholder.typicode.com/posts/${i}`)
                .its('body')
                .then((response) => {
                    let errors = [];

                    if (typeof response.body !== 'string') {
                        errors.push(`Response body is not a string. Actual type: ${typeof response}`);
                    }

                    if (response.body.length <= greater) {
                        errors.push(`Response body length is not greater than ${greater}. Actual length: ${response.length}`);
                    }

                    if (errors.length > 0) {
                        amountOfFailedTests++;
                        console.log(errors.join('\n'));
                    }
                });
        }

        expect(amountOfFailedTests).to.equal(0, 'Some requests failed');
    });

     */
})
