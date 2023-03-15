module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      "airbnb-base", 
      "airbnb-typescript"
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      "linebreak-style": 0,
      "implicit-arrow-linebreak": "off",
      "no-param-reassign": 0,
      "comma-dangle": 0,
      "@typescript-eslint/comma-dangle": 0,
      "no-var": 0,
      "no-underscore-dangle": 0,
      "camelcase": 0,
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": 0,
      "class-methods-use-this": 0,
      "import/no-import-module-exports": 0,
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": true
        }
      ],
      "@typescript-eslint/indent": 0,
      "no-confusing-arrow": 0,
      "operator-linebreak": 0,
      "object-curly-newline": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        { "varsIgnorePattern": "^_" }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE", "PascalCase"],
          "leadingUnderscore": "allow"
        }
      ]
    },
  };
  