cd export function createHeirarchy(items,sortKey) {
  // O(n^2)
  let groupedItems = {}
  items.forEach((object)=>{
    const value = object[sortKey]
    let group = groupedItems[value] // Array
    if (!group) {
      groupedItems[value] = []
      group = groupedItems[value]
    }

    group.push(object)
  })

  return groupedItems
}
