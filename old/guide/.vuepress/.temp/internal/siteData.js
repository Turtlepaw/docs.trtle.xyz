export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Horizon Docs",
  "description": "The official documentation for Horizon.",
  "head": [
    [
      "meta",
      {
        "charset": "utf-8"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#5865f2"
      }
    ],
    [
      "meta",
      {
        "name": "twitter:card",
        "content": "summary"
      }
    ],
    [
      "meta",
      {
        "property": "og:title",
        "content": "Horizon Docs"
      }
    ],
    [
      "meta",
      {
        "property": "og:description",
        "content": "The official documentation for Horizon."
      }
    ],
    [
      "meta",
      {
        "property": "og:type",
        "content": "website"
      }
    ],
    [
      "meta",
      {
        "property": "og:url",
        "content": "https://docs.trtle.xyz/"
      }
    ],
    [
      "meta",
      {
        "property": "og:locale",
        "content": "en_US"
      }
    ],
    [
      "meta",
      {
        "property": "og:image",
        "content": "/meta-image.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
