import run from "aocrunner"

const part1 = (input) => {
  var sum = 0
  const rec = json => {
    if (typeof json == 'string') return
    if (typeof json == 'number')
      sum += json

    Object.values(json).forEach(rec)
  }
  rec(JSON.parse(input))

  return sum
}

const part2 = (input) => {
  var sum = 0
  const rec = json => {
    if (typeof json == 'string') return
    if (typeof json == 'number')
      sum += json

    if (!Array.isArray(json) && Object.values(json).includes('red')) return

    Object.values(json).forEach(rec)
  }
  rec(JSON.parse(input))

  return sum
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
