import api from './init'

export function list() {
    return api.get('/jobs').then(res => res.data)
}
export function listSingle(id) {
    return api.get(`/jobs/${id}`).then(res => res.data)
}

export function create({ parentProject, jobOwner, jobName, jobStatus, jobDescription }) {
    return api.post('/jobs', {
      parentProject, jobOwner, jobName, jobStatus, jobDescription
    }).then(res => res.data)
}
