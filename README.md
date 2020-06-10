# Linter's rules 

This package provide linting rules as an extensible shared config.

[TypeScript on ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint)

## Status

This repo is under construction and may be used with caution

- Javacript rules: 🚧
- Typescript rules: 🚧

# Installation and usage


Add a `.npmrc` file in your root folder 

```
registry=https://npm.pkg.github.com/Romtrooper
```

```
npm install @romtrooper/lint eslint babel-eslint -D
```

_Plugins installation:_

```
npm install eslint-plugin-import eslint-plugin-react -D
```

_Extra for linting Typescript only:_


```
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```


In your `.estlintrc` file:

_The default configuration exported is for Typescript:_


```
{
	"extends": "./node_modules/@romtrooper/lint"
}
```

_To use the Javascript configuration set:_


```
{
	"extends": "./node_modules/@romtrooper/lint/javascript"
}
```


### Managing Github Packages

[Managing github packages](https://dev.to/jgierer12/how-to-publish-packages-to-the-github-package-repository-4bai)


# Rules

## ESLint and TSlint compatibility

[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)

[TSLint Migration Guide](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)


## ESLint with TypeScript

Configuring [details](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)

See [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) rules


# TroubleShooting

**eslint not validating .ts or .tsx files**

Update you npm scripts: 

```
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
},
```

On Visual Studio Code update your eslint package config to activate eslint on the fly:

```
"eslint.validate": [
	"javascript",
	"javascriptreact",
	"typescript",
	"typescriptreact",
],
```
[Stack Overflow related post](https://stackoverflow.com/questions/56557988/eslint-in-vsc-not-working-for-ts-and-tsx-files)


------

**parserOptions.project error**

Error while runing `eslint` command requiring `parserOptions.project` in config file:

Add this to you eslint config file:

```
parserOptions: {
	project: "./tsconfig.json"
}
```

[Visual Studio related post](https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration#eslint-configure)
