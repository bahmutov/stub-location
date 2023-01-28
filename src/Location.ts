// https://glebbahmutov.com/blog/stub-react-import/#move-the-side-effect

/** This common object wraps around things we cannot stub
 * like window.locations methods which are locked for security reasons
 * But, we can stub Location's methods
 * In you app this would be in a common lib
 */
export const Location = {
  assign(url: string) {
    window.location.assign(url)
  },
  replace(url: string) {
    window.location.replace(url)
  }
}
