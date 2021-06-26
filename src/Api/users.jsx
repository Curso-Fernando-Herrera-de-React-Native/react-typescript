import axios from 'axios'

export const usersAPI = axios.create({
  baseURL: 'https://reqres.in/api'
})
