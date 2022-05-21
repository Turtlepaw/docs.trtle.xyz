# Guide

## Installation
First step is installing @horizon/scam. You can do this by running the following command:

:::: code-group
::: code-group-item npm
```sh:no-line-numbers
npm install @horizon/scam
```
:::
::: code-group-item yarn
```sh:no-line-numbers
yarn add @horizon/scam
```
:::
::: code-group-item pnpm
```sh:no-line-numbers
pnpm add @horizon/scam
```
:::
::::

# Checking a link

```js
const scam = require('@horizon/scam');

const result = await scam({
    fullText: "Whos getting it first? https://nitrogifz.xyz/nitro"
});
```