import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export function setApiToken(token) {
  if (!!token){
    api.defaults.headers['Authorization'] = `JWT ${token}`
  } else {
    delete api.defaults.headers['Authorization']
  }
}

export default api
