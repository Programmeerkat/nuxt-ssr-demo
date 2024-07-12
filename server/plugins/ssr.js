import { renderToString } from '@politie/pwc-webcomponents/hydrate'

export default defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook('render:response', async (response) => {
    const results = await renderToString(response.body)
    response.body = results.html
  })
})
