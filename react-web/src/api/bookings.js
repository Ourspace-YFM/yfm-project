import api from './init'

export function list() {
    return api.get('/bookings').then(res => res.data)
}

export function listSingle(id) {
    return api.get(`/bookings/${id}`).then(res => res.data)
}

export function create({ jobId, taskId, status, name, installerId, locationId, bookedDate, bookedTime, estDuration, instructions, attachments, actualStartTime, actualFinishTime }) {
    return api.post('/bookings', {
      jobId, taskId, status, name, installerId, locationId, bookedDate, bookedTime, estDuration, instructions, attachments, actualStartTime, actualFinishTime
    }).then(res => res.data)
}
