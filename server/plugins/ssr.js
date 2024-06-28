import hydrate from '@politie/pwc-webcomponents/hydrate'
import { defineCustomElements } from '@politie/pwc-webcomponents/loader/index.es2017.js'

export default defineNitroPlugin(async (nitroApp) => {
  console.log('hydrate')
  console.log(hydrate)
  // await defineCustomElements(window)
  nitroApp.hooks.hook('render:response', async (response) => {
    //const results = await hydrate.renderToString(response.body)
    // response.body = results.html
  })
})
