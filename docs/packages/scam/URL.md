# URL (interface)

The URL interface is used to represent a URL.

Property | Type | Description
--- | --- | ---
isScam | Function (returns boolean) | Returns whether the URL is a scam or not.
scamType | [ScamType](ScamType) | The type of the scam.
URL | String | The URL.
screenshot | Buffer | A screenshot of the URL.
websiteType | [WebsiteType](WebsiteType) | The type of the website.