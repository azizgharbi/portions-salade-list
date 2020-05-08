/*
 * Install Prettier
 * https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
 */

module.exports = {
    semi: false,
    overrides: [
        {
            files: ['*.js', '*.json', '*.scss'],
            options: {
                printWidth: 150,
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
            },
        },

        {
            files: ['*.html', '*.ejs'],
            options: {
                printWidth: 1000,
                tabWidth: 4,
                htmlWhitespaceSensitivity: 'ignore',
                proseWrap: 'never',
            },
        },
    ],
};
