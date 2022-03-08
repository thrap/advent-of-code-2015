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
  const input = parseInput(rawInput)

  return
}

const part1Input = `H => HO
H => OH
O => HH

HOHOHO`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 7 }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: "" }
    ],
    solution: part2,
  },
  onlyTests: false,
})
