function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      return array
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i ++) {
    debugger
    if (array[i] === findFn) {
      return array[i]
    }
  }
  return null
}
