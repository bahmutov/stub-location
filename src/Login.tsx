import { Location } from './Location'

export const LoginBtn = () => {
  const handleSubmit = () => {
    Location.assign('https://cypress.tips')
  }

  return (
    <button onClick={handleSubmit} data-cy="login-button">
      Log in
    </button>
  )
}
