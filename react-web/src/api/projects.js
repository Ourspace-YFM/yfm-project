import api from './init'

export function list() {
    return api.get('/projects').then(res => res.data)
}
export function listSingle(id) {
    return api.get(`/project/${id}`).then(res => res.data).then(project => project).then(project => project)
}

export function create({ clientId, projectName, projectType, projectDescription, projectStatus, projectPriority, startDate, endDate }) {
    return api.post('/projects', {
        clientId, projectName, projectType, projectDescription, projectStatus, projectPriority, startDate, endDate
    }).then(res => res.data)
}
