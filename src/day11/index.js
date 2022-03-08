import run from "aocrunner"

const alphabet = 'abcdefghjkmnpqrstuvwxyz'
const chars = alphabet.length

const toArr = (n, acc = []) => acc.length == 8 ? acc : toArr(Math.floor(n / chars), acc.concat([n % chars]))

const increment = arr => {
  return toArr(arr.concat([]).reverse().reduce((acc, x, i) => acc + x*Math.pow(chars, i)) + 1).reverse()
}

const toStr = arr => arr.map(x => alphabet[x]).join('')

const rule1 = arr => {
  for(var i = 0; i < arr.length - 2; i++) {
    if (arr[i] + 1 == arr[i+1] && arr[i] + 2 == arr[i+2]) {
      return true
    }
  }
  return false
}

const rule2 = arr => /^[^iol]+$/.test(toStr(arr))

const rule3 = arr => /(.)\1.*(.)\2/.test(toStr(arr))

const isValid = arr => {
  return rule1(arr) && rule2(arr) && rule3(arr)
}

const part1 = (input) => {
  var arr = increment(input.split('').map(x => alphabet.indexOf(x)))

  while (!isValid(arr)) {
    arr = increment(arr)
  }

  return toStr(arr)
}

const part2 = (input) => {
  return part1(part1(input))
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
