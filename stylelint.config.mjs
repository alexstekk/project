/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        // 'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
        'selector-class-pattern': undefined,
        'scss/double-slash-comment-whitespace-inside': undefined,
        'scss/comment-no-empty': undefined,
    },
};
