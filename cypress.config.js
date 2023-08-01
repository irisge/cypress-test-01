const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			on('task', { downloadFile });
		},
	},
	projectId: 'c3gf52',
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/results',
		overwrite: false,
		html: false,
		json: true,
	},
});
