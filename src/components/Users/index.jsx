import { usersAPI } from 'Api/users'
import { useEffect } from 'react'

const Users = () => {
  
  useEffect(() => {
    usersAPI('/users')
      .then(res => console.log(res.data.data))
      .catch(console.error)
  }, [])

  return (
    <div>

      <h1>Usuarios</h1>

      <table>
        <thead>
          <tr>
            <th>
              Avatar
            </th>
            <th>
              Name
            </th>
            <th>
              email
            </th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </div>
  )
}

export default Users
