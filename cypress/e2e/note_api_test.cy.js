describe('Register and Login API Notes ', () => {
	it.only('API Create User test', () => {
		cy.request({
			url: 'https://practice.expandtesting.com/notes/api/users/register',
			method: 'POST',
			body: {
				name: 'John',
				email: 'johndoe190@gmail.com',
				password: 'pass123!',
			},
		})
			.its('body.name')
			.should('eql', 'John');
	});

	it.only('API User Login test', () => {
		cy.request({
			url: 'https://practice.expandtesting.com/notes/api/users/login',
			method: 'POST',
			body: {
				email: 'johndoe190@gmail.com',
				password: 'pass123!',
			},
		})
			.its('body.email')
			.should('eql', 'johndoe190@gmail.com');
	});
});
