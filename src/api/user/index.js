import { clientFetch } from '../clientFetch'
import { AuthService } from '../authService/index.js'
export const login = (body) => {
  return clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/user/register', body)
}
export const logout = () => {
  return clientFetch.get('/user/logout')
}
export const refresh = () => {
  return clientFetch.get('/user/refresh')
}

export const authService = new AuthService()