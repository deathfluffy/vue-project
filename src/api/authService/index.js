import { clientFetch } from '../clientFetch'
import {token} from "@/map/token.js";
export const TOKEN_KEY = 'token'
class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
    clientFetch.default.headers.common = { Authorization: `Bearer {token}` }
    token.#token = token
  }
  clearToken() {
    this.#token = null
    localStorage.removeItem(TOKEN_KEY)
    clientFetch.default.headers.common = ''
  }
  async login(body) {
    const { data } = clientFetch.post('/user/login', body)

    const { accessToken } = data

    this.setToken(accessToken)
  }

  async registerUser(body) {
    const { data } = clientFetch.post('/user/register', body)

    const { accessToken } = data

    this.setToken(accessToken)
  }

  async logout() {
    await clientFetch.get('/user/logout')
    this.clearToken()
  }

  async refresh() {
    return clientFetch.get('/user/refresh')
  }
}
