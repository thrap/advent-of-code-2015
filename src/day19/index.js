import run from "aocrunner"

const parseInput = rawInput => {
  const [rules, start] = rawInput.split('\n\n')
  return [start, rules.split('\n').map(l => l.split(' => '))]
}

const part1 = (rawInput) => {
  const [start, rules] = parseInput(rawInput)
  const distinct = {}
  rules.forEach(([a,b]) => {
    const rec = (str, acc) => {
      if (str.length < a.length) return

      if (str.substring(0, a.length) == a) {
        distinct[acc + b + str.substring(a.length)] = true;
      }
      rec(str.substring(1), acc + str[0])
    }
    rec(start, '')
  })

  return Object.keys(distinct).length
}

const part2 = (rawInput) => {
  var [str, rules] = parseInput(rawInput)
  rules = rules.map(x => x.reverse())

  var count = 0

  for (var i = 0; str.length > 1; i++) {
    rules.forEach(([a,b]) => {
      if (str.includes(a)) {
        count++
        str = str.replace(a, b)
      }
    })
  }

  return count
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
