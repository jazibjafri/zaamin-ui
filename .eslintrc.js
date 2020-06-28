var OFF = 0,
    WARN = 1,
    ERROR = 2;

module.exports = exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
        commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['eslint-plugin-import', '@typescript-eslint'],
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    rules: {
        // Possible Errors (overrides from recommended set)
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-unused-vars': OFF,
        'no-unexpected-multiline': ERROR,
        '@typescript-eslint/ban-ts-ignore': OFF,
        'react-hooks/exhaustive-deps': OFF,

        // Best Practices

        'block-scoped-var': ERROR,
        'consistent-return': [ERROR, { treatUndefinedAsUnspecified: false }],
        'curly': [ERROR, 'multi-line', 'consistent'],
        'default-case': ERROR,
        'dot-location': [ERROR, 'property'],
        'eqeqeq': [ERROR, 'smart'],
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-case-declarations': ERROR,
        'no-else-return': ERROR,
        'no-empty-pattern': ERROR,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-floating-decimal': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-magic-numbers': OFF,
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-global-assign': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-new': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': ERROR,
        'no-proto': ERROR,
        'no-redeclare': ERROR,
        'no-return-assign': ERROR,
        'no-self-compare': ERROR,
        'no-throw-literal': ERROR,
        'no-useless-call': ERROR,
        'no-useless-concat': ERROR,
        'no-void': ERROR,
        'no-with': ERROR,
        'vars-on-top': ERROR,
        // Enforces the style of wrapped functions
        'wrap-iife': [ERROR, 'inside'],
        'yoda': WARN,

        // Variables
        'init-declarations': [ERROR, 'always'],
        'no-delete-var': ERROR,
        'no-label-var': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-shadow': ERROR,
        // We require all vars to be initialized (see init-declarations)
        // If we NEED a var to be initialized to undefined, it needs to be explicit
        'no-undef-init': ERROR,
        'no-undef': ERROR,
        'no-undefined': OFF,
        // Disallow hoisting - let & const don't allow hoisting anyhow
        'no-use-before-define': ERROR,

        // Node.js and CommonJS
        'callback-return': [ERROR, ['callback', 'cb', 'next']],
        'global-require': OFF,
        'handle-callback-err': [ERROR, 'err'],
        'no-new-require': ERROR,
        // Use path.concat instead
        'no-path-concat': ERROR,
        'no-process-exit': ERROR,
        'no-sync': WARN,

        // ECMAScript 6 support
        'arrow-body-style': OFF,
        'arrow-parens': [WARN, 'as-needed'],
        'arrow-spacing': [ERROR, { before: true, after: true }],
        'constructor-super': ERROR,
        'generator-star-spacing': [ERROR, 'before'],
        'no-class-assign': ERROR,
        'no-const-assign': ERROR,
        'no-dupe-class-members': ERROR,
        'no-this-before-super': ERROR,
        'no-var': ERROR,
        'object-shorthand': [WARN, 'always'],
        'prefer-arrow-callback': WARN,
        'prefer-spread': WARN,
        'prefer-template': WARN,
        'require-yield': ERROR,

        // Stylistic - everything here is because of style.
        'array-bracket-spacing': [ERROR, 'never'],
        'block-spacing': [ERROR, 'always'],
        'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
        'camelcase': ERROR,
        'comma-dangle': [ERROR, 'always-multiline'],
        'comma-spacing': [ERROR, { before: false, after: true }],
        'comma-style': [ERROR, 'last'],
        'computed-property-spacing': [ERROR, 'never'],
        'consistent-this': [ERROR, 'self'],
        'eol-last': [ERROR, 'always'],
        'func-style': [ERROR, 'expression'],
        'id-length': [ERROR, { min: 2, max: 32 }],
        'indent': [OFF, 4],
        'jsx-quotes': [ERROR, 'prefer-double'],
        'linebreak-style': [ERROR, 'windows'],
        'lines-around-comment': [ERROR, { beforeBlockComment: true }],
        'max-depth': [ERROR, 4],
        'max-len': [ERROR, { code: 90, ignoreUrls: true }],
        'max-nested-callbacks': [ERROR, 4],
        'max-params': [ERROR, 4],
        'new-cap': ERROR,
        'new-parens': [ERROR, 'always'],
        'no-array-constructor': ERROR,
        'no-bitwise': ERROR,
        'no-continue': OFF,
        'no-inline-comments': OFF,
        'no-lonely-if': ERROR,
        'no-mixed-spaces-and-tabs': ERROR,
        'no-multiple-empty-lines': [ERROR, { max: 1, maxEOF: 1 }],
        'no-negated-condition': OFF,
        'no-nested-ternary': ERROR,
        'no-new-object': ERROR,
        'no-plusplus': OFF,
        'func-call-spacing': [ERROR, 'never'],
        'no-ternary': OFF,
        'no-trailing-spaces': OFF,
        'no-underscore-dangle': OFF,
        'no-unneeded-ternary': ERROR,
        'object-curly-spacing': [ERROR, 'always'],
        'one-var': OFF,
        'operator-assignment': [ERROR, 'always'],
        'operator-linebreak': [ERROR, 'before'],
        'quote-props': [ERROR, 'consistent-as-needed'],
        'quotes': [OFF, 'single'],
        'semi-spacing': [ERROR, { before: false, after: true }],
        'semi': [ERROR, 'always'],
        'sort-vars': OFF,
        'keyword-spacing': [ERROR, { before: true, after: true }],
        'space-before-blocks': [ERROR, 'always'],
        'space-before-function-paren': OFF,
        'space-in-parens': [ERROR, 'never'],
        'space-infix-ops': ERROR,
        'space-unary-ops': [
            ERROR,
            {
                words: true,
                nonwords: true,
                overrides: {
                    '!': false,
                    '-': false,
                },
            },
        ],
        'wrap-regex': ERROR,
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': OFF,
            },
        },
    ],
};
