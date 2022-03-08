import run from "aocrunner"

const re = /(.+) c.*y (.+) k.*r (.+) s.*r (.+) /
const parseLine = l => l.match(re).slice(1,5).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  var max = 0
  input.forEach(([deer, speed, active, idle]) => {
    var seconds = 0
    var distance = 0

    while(seconds < 2503) {
      for (var i = 0; i < active && seconds < 2503; i++, seconds++) {
        distance += speed
      }
      for (var i = 0; i < idle; i++, seconds++) {

      }
    }
    max = Math.max(max, distance)
  })

  return max
}

const part2 = (rawInput) => {

}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
