import run from "aocrunner"
import { Set } from 'immutable'

const parseInput = (rawInput) => rawInput.split('\n').map(l => {
  const [s, dist] = l.split(' = ')
  const [a, b] = s.split(' to ')
  return [a,b, +dist]
})

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const graph = {}

  const cities = Set.of(...input.map(([a,b]) => [a,b]).flat())
  cities.forEach(city => {
    graph[city] = {}
  })

  input.forEach(([a, b, dist]) => {
    graph[a][b] = dist
    graph[b][a] = dist
  })

  var min = Number.MAX_VALUE
  const perms = (cities, last, acc) => {
    if (cities.size == 0) {
      min = Math.min(min, acc)
      return
    }
    cities.forEach(city => {
      perms(cities.remove(city), city, acc + graph[city][last] || 0)
    })
  }

  perms(cities, '', 0)
  return min
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
