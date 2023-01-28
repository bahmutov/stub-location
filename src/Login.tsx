import { Location } from './Location'

export const LoginBtn = () => {
  const handleSubmit = () => {
    setTimeout(() => {
      Location.assign('https://cypress.tips')
    }, 1000)
  }

  return (
    <button onClick={handleSubmit} data-cy="login-button">
      Log in
    </button>
  )
}
