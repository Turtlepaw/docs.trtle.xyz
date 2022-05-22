# Check
## .check([options](#options))

```js
const scam = require('@horizon/scam');
const check = await scam.check("microsoft.gg");
```

Returns <code>Promise<[URL](URL)[]></code>

## Options
Property | Type | Description
--- | --- | ---
fullText | string | The raw/full text of the URL to scan.
deepScan | boolean | Whether to perform a [deep scan](deepScan) of the URL.
