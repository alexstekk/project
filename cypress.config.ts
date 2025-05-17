import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:5000',
    },

    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
});
