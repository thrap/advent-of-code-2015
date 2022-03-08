import run from "aocrunner"
import { Set } from 'immutable'

const graph = (input) => input.split('\n').reduce((graph, l) => {
    const [s, dist] = l.split(' = ')
    const [a, b] = s.split(' to ')
    graph[a] = Object.assign({ [b]: +dist }, graph[a])
    graph[b] = Object.assign({ [a]: +dist }, graph[b])
    return graph
  }, {})

const solve = (graph, f) => {
  const rec = (cities, last, acc) => {
    if (cities.size == 0) return acc

    const toDistance = city => rec(cities.remove(city), city, acc + graph[city][last] || 0)

    return f(...cities.map(toDistance))
  }

  return rec(Set.of(...Object.keys(graph)), '', 0)
}

const part1 = (input) => solve(graph(input), Math.min)

const part2 = (input) => solve(graph(input), Math.max)

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
