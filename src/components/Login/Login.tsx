import React, { useReducer } from 'react'

interface AuthState {
  validation: boolean,
  token: string | null,
  username: string,
  name: string
}

const initialState: AuthState = {
  validation: true,
  token: null,
  username: '',
  name: ''
}

type AuthAction = { type: string }

const authReducer = (state: AuthState, action: AuthAction): AuthReduce => {
  return initialState
}

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  
  return (
    <div>

      <h2>Autentificando...</h2>
      <h2>Autentificado!</h2>
      <h2>No Autentificado :(</h2>
      
      <button>Login</button>
      <button>Logout</button>

    </div>
  )
}
