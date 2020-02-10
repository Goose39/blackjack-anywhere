import config from '../config'
import TokenService from './token-service'

const BalanceService = {
  getBalance(user) {
    fetch(`${config.API_ENDPOINT}/balance/${user}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
      })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        return res.balance
      })
  },
  updateBalance({ user_name, balance }) {
    return fetch(`${config.API_ENDPOINT}/balance/${user_name}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, balance }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        return res
        })
      },
}

export default BalanceService
