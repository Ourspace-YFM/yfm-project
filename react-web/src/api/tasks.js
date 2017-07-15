import api from './init'

export function list() {
    return api.get('/tasks').then(res => res.data)
}

export function create({ parentJob, taskName, taskStatus, yfmAttachment, popShots, completed, completedBy }) {
    return api.post('/tasks', {
      parentJob, taskName, taskStatus, yfmAttachment, popShots, completed, completedBy
    }).then(res => res.data)
}
