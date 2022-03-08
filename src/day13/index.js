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

const value = (graph, arr) => {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    const left = arr[(arr.length + i-1) % arr.length]
    const right = arr[(i+1) % arr.length]
    sum += (graph[arr[i]][left] || 0) + (graph[arr[i]][right] || 0)
  }
  return sum
}

const maximise = (graph) => {
  var max = Number.MIN_VALUE
  permutations(graph).forEach(perm => {
    max = Math.max(max, value(graph, perm))
  })

  return max
}

const part1 = (rawInput) => {
  const graph = parseInput(rawInput)
  return maximise(graph)
}

const part2 = (rawInput) => {
  const graph = parseInput(rawInput)
  graph["me"] = {}
  return maximise(graph)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
