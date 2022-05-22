import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Welcome",["/index.html","/README.md"]],
  ["v-28586e6c","/packages/scam/","Guide",["/packages/scam/index.html","/packages/scam/README.md"]],
  ["v-7196e159","/packages/scam/ScamLink.html","ScamLink",["/packages/scam/ScamLink","/packages/scam/ScamLink.md"]],
  ["v-7c223c66","/packages/scam/deepScan.html","Deep Scan FAQ",["/packages/scam/deepScan","/packages/scam/deepScan.md"]],
  ["v-3706649a","/404.html","",["/404"]],
  ["v-05381d8a","/packages/scam/Check.html","Client",["/packages/scam/Check","/packages/scam/Check.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
