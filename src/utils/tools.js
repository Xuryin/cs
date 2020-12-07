export const getArrItem = (arr, dir) => {
  let arrObj = []
  arr.forEach((item) => {
    arrObj.push(item[dir])
  })
  return arrObj
}

export const judgeType = (obj) => {
  let a = Object.prototype.toString.call(obj)
  console.log(a)
}

