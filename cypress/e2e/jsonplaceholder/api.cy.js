
describe('JSON place holder', () => {

    // DONE TASK #1
    it('GET json and check that it is an object', () => {
        cy.request(`https://jsonplaceholder.typicode.com/posts`)
            .its('body').then((response) => {
                for(let i = 0; i < response.length; i++){
                    expect(typeof response[i].userId).to.eq('number')
                    expect(typeof response[i]).to.eq('object')
                }
        })
    })
    // DONE TASK #2
    it('GET json and check that it is an body field is string and greater then some value', async (done) => {
        const amountOfTry = 120, greater = 160;
        let errors = [];
        let cycleDone = false

        // Generate array with indexes from 1 to amountOfTry
        const indexes = Array.from({ length: amountOfTry }, (_, i) => i + 1);

        // Send requests for each index and check response
        const requests = indexes.map((index) => {
            return cy.request({
                url: `https://jsonplaceholder.typicode.com/posts/${index}`,
                failOnStatusCode: false
            })
                .then((response) => {
                    if (response.status !== 200) {
                        errors.push(`Request for index ${index} failed with status ${response.status}`);
                    } else {

                        if (typeof response.body.body !== 'string') {
                            errors.push(`Request for index ${index}, Resp body is not a string. Actual type: ${typeof response}`);
                        }

                        if (response.body.body.length <= greater) {
                            errors.push(`Request for index ${index}, Resp body length is not greater than ${greater}. Actual length: ${response.body.body.length}`);
                        }
                    }
                    if (index === amountOfTry) cycleDone = true
                    while (cycleDone) {
                        if (errors.length > 0) {
                            const errorMessage = `Some tests failed: ${errors.join('\n')}`;
                            throw new Error(errorMessage);
                        }
                        cycleDone = false
                    }
                });
        });

/*
        // Wait for all requests to finish and then check for failed tests
        return await Promise.all(requests).then(() => {

            if (errors.length > 0) {
                const errorMessage = `Some requests failed: ${errors.join('\n')}`;
                throw new Error(errorMessage);
            }
        }); */
    });



/*
    it('GET json and check that it is an object', async () => {
        let amountOfFailedTests = 0;
        const promises = [];

        for (let i = 1; i < amountOfTry; i++) {
            promises.push(
                cy.request({
                    url: `https://jsonplaceholder.typicode.com/posts/${i}`,
                    failOnStatusCode: false
                }).then((response) => {
                    let errors = [];

                    if (typeof response.body.body !== 'string') {
                        errors.push(`Response body is not a string. Actual type: ${typeof response}`);
                    }

                    if (response.body.body.length <= greater) {
                        errors.push(`Response body length is not greater than ${greater}. Actual length: ${response.body.body.length}`);
                    }

                    if (errors.length > 0) {
                        amountOfFailedTests++;
                        cy.log(errors.join('\n'));
                    }
                })
            );
        }

        const result = await Promise.all(promises);

        expect(amountOfFailedTests).to.equal(0, 'Some requests failed');
    });

*/

})
