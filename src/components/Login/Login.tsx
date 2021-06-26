import { useEffect, useReducer } from 'react'

interface AuthState {
  validation: boolean,
  token: string | null,
  username: string,
  name: string
}

type IsTokenPayload = { username: string, token: string }
type NotTokenPayload = { validation: boolean, token: null }

type AuthAction = 
  | { type: 'validation' }
  | { type: 'isToken', payload: IsTokenPayload }
  | { type: 'notToken', payload: NotTokenPayload }

const initialState: AuthState = {
  validation: true,
  token: null,
  username: '',
  name: ''
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {

    case 'validation':
      return {
        ...state,
        validation: false
      }

    case 'isToken':
      return {
        ...state,
        validation: false,
        username: 'Madeval',
        token: '1234'
      }

    case 'notToken':
      return {
        ...state,
        validation: false,
        token: null
      }
      
    default:
      return initialState

  }
}

const Login = () => {

  const [{ validation, token, username }, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {

    setTimeout( () => dispatch({ type: 'validation' }), 1500 );

  }, [])

  if (validation) return <h2>Autentificando...</h2>
  
  return (
    <div>

      {
        !!token
          ? (
            <>
              <h2>Autentificado como {username}!</h2>
              <button onClick={ () => dispatch({ type: 'notToken', payload: { validation: false, token: null } }) }>Logout</button>
            </>
          )
          : (
            <>
              <h2>No Autentificado :(</h2>
              <button onClick={ () => dispatch({ type: 'isToken', payload: { username: 'Madeval', token: '123' } }) }>Login</button>
            </>
          )
      }
      

    </div>
  )
}

export default Login
