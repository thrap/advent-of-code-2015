import run from "aocrunner"
import { Set } from 'immutable'

const parseInput = (rawInput) => {
  const graph = {}
  rawInput.replace(/\./g,'').split('\n').map(l => {
    const split = l.split(' ')
    const a = split[0]
    const b = split[10]
    graph[a] = Object.assign({[b]: (split[2] == 'lose' ? -1 : 1) * split[3]}, graph[a])
  })
  return graph
}


const part1 = (rawInput) => {
  const graph = parseInput(rawInput)

  const permutations = (graph) => {
    const perms = []
    const rec = (arr, perm) => {
      if (arr.size == 0) {
        perms.push(perm)
        return
      }

      arr.map(x => rec(arr.remove(x), perm.concat([x])))
    }

    rec(Set.of(...Object.keys(graph)), [])
    return perms
  }
  const perms = permutations(graph)

  const value = arr => {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      const left = arr[(arr.length + i-1) % arr.length]
      const right = arr[(i+1) % arr.length]
      sum += graph[arr[i]][left] + graph[arr[i]][right]
    }
    return sum
  }

  var max = Number.MIN_VALUE
  perms.forEach(perm => {
    max = Math.max(max, value(perm))
  })

  return max
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 330 }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: "" }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
