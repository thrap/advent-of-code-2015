import run from "aocrunner"
import MD5 from "crypto-js/md5.js";

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const secret = parseInput(rawInput)
  for (var i = 0; i < 1000000; i++) {
    var hash = MD5(secret + i).toString()
    if (hash.substring(0, 5) == '00000') {
      return i
    }
  }
}

const part2 = (rawInput) => {
  const secret = parseInput(rawInput)
  for (var i = 0; i < 10000000; i++) {
    var hash = MD5(secret + i).toString()
    if (hash.substring(0, 6) == '000000') {
      return i
    }
  }
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
