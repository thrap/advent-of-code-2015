import run from "aocrunner"

const parseInput = rawInput => +rawInput

var divisors = n => {
  var divisors = [1,n]
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      var d2 = n / i;
      divisors.push(i)
      if (i != d2) {
        divisors.push(d2)
      }
    }
  }
  return divisors
}

const part1 = (rawInput) => {
  const goal = parseInput(rawInput)

  const d = n => 10 * divisors(n).reduce((acc, x) => acc + x);

  var n = 0
  while (d(n) < goal)
    n++

  return n
}

const part2 = (rawInput) => {
  const goal = parseInput(rawInput)

  const d = n => 11 * divisors(n).filter(x => n / x <= 50).reduce((acc, x) => acc + x, 0);

  var n = 0
  while (d(n) < goal)
    n++

  return n
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
