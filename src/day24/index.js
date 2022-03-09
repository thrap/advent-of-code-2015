import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(x => +x)

const part1 = (rawInput) => {
  const packages = parseInput(rawInput).sort((a,b) => b - a)
  console.log(packages.length);
  const sum = packages.reduce((acc, x) => acc + x)
  console.log(packages)
  const goal = sum / 3
  console.log(goal);

  var min = Number.MAX_VALUE
  var count = 0
  var minQE = Number.MAX_VALUE
  const brute = (a, b, c, i, c1, qe) => {
    if (c1 > min || qe > minQE)
      return
    if (a == goal && b == goal && c == goal) {
      min = c1
      minQE = qe

      count ++
      if (packages.length < 10 || count % 100000 == 0)
        console.log(count, a, b, c, c1, qe);
      return
    }
    if (i >= packages.length) return
    if (a > goal || b > goal || c > goal) return

    const pack = packages[i]
    brute(a + pack, b, c, i+1, c1 + 1, qe * pack)
    brute(a, b + pack, c, i+1, c1, qe)
    brute(a, b, c + pack, i+1, c1, qe)
  }

  brute(0,0,0,0,0,1)
  return minQE
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `1
2
3
4
5
7
8
9
10
11`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 99 }
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
