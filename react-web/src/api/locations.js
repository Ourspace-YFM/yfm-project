import api from './init'

export function list() {
    return api.get('/locations').then(res => res.data)
}
export function listSingle(id) {
    return api.get(`/locations/${id}`).then(res => res.data)
}
export function listSurrounding(coordinates,distance) {
    return api.get(`/locations/${id}`).then(res => res.data)
}

export function create({ clientId, projectName, projectType, projectDescription, projectStatus, projectPriority, startDate, endDate }) {
    return api.post('/projects', {
        clientId, projectName, projectType, projectDescription, projectStatus, projectPriority, startDate, endDate
    }).then(res => res.data)
}
