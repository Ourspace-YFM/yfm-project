import api from './init'

export function list() {
    return api.get('/companies').then(res => res.data)
}

export function create({ name, logo }) {
    return api.post('/companies', {
      name, logo
    }).then(res => res.data)
}
