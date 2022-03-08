import run from "aocrunner"

const re = /y (.+) k.*r (.+) s.*r (.+) /
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var max = 0
  input.forEach(([speed, active, idle]) => {
    var seconds = 0
    var distance = 0

    while(seconds < 2503) {
      for (var i = 0; i < active && seconds < 2503; i++, seconds++) {
        distance += speed
      }
      seconds += idle
    }
    max = Math.max(max, distance)
  })

  return max
}

const part2 = (rawInput) => {
  const limit = 2503
  const input = parseInput(rawInput)

  const dist = Array(limit).fill(0).map(_ => [])

  var max = 0
  input.forEach(([speed, active, idle], deer) => {
    var seconds = 0
    var distance = 0

    dist[seconds][deer] = distance

    while(seconds < limit) {
      for (var i = 0; i < active && seconds < limit; i++, seconds++) {
        distance += speed
        dist[seconds][deer] = distance
      }
      for (var i = 0; i < idle && seconds < limit; i++, seconds++) {
        dist[seconds][deer] = distance
      }
    }
    max = Math.max(max, distance)
  })

  const score = dist.map(d => d.map(x => x == Math.max(...d) ? 1 : 0))

  const scores = Array(input.length).fill(0)
  for (var i = 0; i < limit; i++) {
    for(var j = 0; j < input.length; j++) {
      scores[j] += score[i][j]
    }
  }
  return Math.max(...scores)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
