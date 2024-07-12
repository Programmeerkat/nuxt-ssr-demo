import { defineCustomElements } from '@politie/pwc-webcomponents/loader/index.es2017.js'

export default () => {
  if (process.client) {
    // console.log('hello from pwc plugin')
    // This one doesnt seem to be necessary
    // defineCustomElements(window)
  }
}