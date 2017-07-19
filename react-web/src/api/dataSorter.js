import groupBy from 'lodash/groupBy'
import uniqBy from 'lodash/uniqBy'


export function clientsWithGroupedProjects(projects) {
  const projectsByClient = groupBy(projects, (project) => project.clientId._id)
  console.log('projectsByClient', projectsByClient)
  // Get clients with projects nested inside
  // [ { name: "Client name", projects: [] }, ... ]
  return uniqBy(projects.map((project) => Object.assign({},
    project.clientId,
    { projects: projectsByClient[project.clientId._id] }
  )), '_id')
}

export function projectsGroupedByStatus(projects) {
  let group = groupBy(projects, 'status')
  let keys = Object.keys(group)
  return keys.map(key =>{
    return {
      key: key,
      items: group[key]
    }
  })
}

export function projectsGroupedByPriority(projects) {
  return groupBy(projects, 'priority')
}
