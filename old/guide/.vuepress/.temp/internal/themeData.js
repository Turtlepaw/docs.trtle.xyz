export const themeData = {
  "contributors": false,
  "sidebar": {
    "/": [
      {
        "text": "Home",
        "children": [
          "/"
        ]
      },
      {
        "text": "@horizon/scam",
        "children": [
          "/packages/scam/",
          "/packages/scam/deepScan.md",
          "/packages/scam/Check.md",
          "/packages/scam/ScamLink.md"
        ]
      }
    ]
  },
  "repo": "turtlepaw/docs.trtle.xyz",
  "docsDir": "guide",
  "sidebarDepth": 3,
  "editLinks": true,
  "lastUpdated": true,
  "navbar": [
    {
      "text": "Discord",
      "link": "https://discord.gg/BMBUcJvV4Q"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
