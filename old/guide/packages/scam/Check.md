# Client

Properties | Methods
--- | ---
[]() | [.check](#checkoptions)

## .check(options)
Checks the given text for URLs and then checks the URLs.

Parameter | Type | Description
--- | --- | ---
options | [ScamCheckOptions](#scamcheckoptions) | The options.

Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[ScamLink](/packages/scam/ScamLink)[]>

## ScamCheckOptions
```js
{
    fullText: "Text can have multiple\nlines and spaces.",
    deepScan: false
}
```
*Example usage of ScamCheckOptions*

## ScamCheckOptions#fullText
Description | Type | Default
--- | --- | ---
The raw text to process. | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | None

## ScamCheckOptions#deepScan
Description | Type | Default
--- | --- | ---
[Learn more about Deep scan](/packages/scam/deepscan/) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | None
