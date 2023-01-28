import setupDebug from 'debug'

const debug = setupDebug('location')

export const Location = {
  assign(url: string) {
    debug('assign %s', url)
    window.location.assign(url)
  },
  replace(url: string) {
    debug('replace %s', url)
    window.location.replace(url)
  }
}

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.Location = Location
}
