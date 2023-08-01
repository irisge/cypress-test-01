describe('Register and Login BackMarket Preprod', () => {
	it('Register Failed', () => {
		cy.visit('https://preprod.backmarket.fr/fr-fr/register');
		cy.title().should('eq', 'Rejoignez Back Market | Back Market | Back Market');
		cy.get('button')
			.contains(/C'est OK pour moi/)
			.click();
		cy.get('#signup-email').type('agreatemailadress@gmail.com');
		cy.get('#signup-password').type('Password123!');
		cy.get('form').submit();
	});

	it('Login succeed', () => {
		cy.visit('https://preprod.backmarket.fr/fr-fr/register');
		cy.title().should('eq', 'Rejoignez Back Market | Back Market | Back Market');
		cy.get('button')
			.contains(/C'est OK pour moi/)
			.click();
		cy.get('[data-test="signin-component"]').within(($form) => {
			cy.get('input[type="email"]').type('agreatemailadress@gmail.com');
			cy.get('#signin-password').type('Password123!');
			cy.get('button[type="submit"]').click();
		});
	});
	it('Register succeed', () => {
		cy.visit('https://preprod.backmarket.fr/fr-fr/register');
		cy.title().should('eq', 'Rejoignez Back Market | Back Market | Back Market');
		cy.get('button')
			.contains(/C'est OK pour moi/)
			.click();
		cy.get('[data-test="signup-component"]').within(($form) => {
			cy.get('input[id="firstName"]').type('John');
			cy.get('input[id="lastName"]').type('Doe');
			cy.get('input[type="email"]').type('agreatemailadress@gmail.com');
			cy.get('#signup-password').type('Password123!');
			cy.get('button[type="submit"]').click();
		});
	});
});
