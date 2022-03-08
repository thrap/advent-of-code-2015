import run from "aocrunner"

const re = /Sue \d+: (.*)/
const parseLine = l => l.match(re)[1].split(', ').map(l => l.split(': ')).reduce((acc, [k, v]) => ({...acc, [k]: +v}), {})
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const correct = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
  }

  const numbered = input.map((props, i) => [props, i + 1])
  return numbered.find(([props,]) => Object.keys(props).every(k => props[k] == correct[k]))[1]
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const correct = {
    children: x => x == 3,
    cats: x => x > 7,
    samoyeds: x => x == 2,
    pomeranians: x => x < 3,
    akitas: x => x == 0,
    vizslas: x => x == 0,
    goldfish: x => x < 5,
    trees: x => x > 3,
    cars: x => x == 2,
    perfumes: x => x == 1,
  }

  const numbered = input.map((props, i) => [props, i + 1])
  return numbered.find(([props,]) => Object.keys(props).every(k => correct[k](props[k])))[1]
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
