import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split(' -> '))

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const wire = {}
  var queue = []
  const process = ([inst, x]) => {
    const split = inst.split(' ')
    if (split.length == 1) {
      if (isNaN(wire[inst] ?? +inst))
        return false
      wire[x] = wire[inst] ?? +inst
    } else if (split.length == 2) {
      const [op, y] = split
      if (isNaN((wire[y] ?? +y))) {
        return false
      }
      if (op == 'NOT') {
        wire[x] = ~(wire[y] ?? +y)
      } else {
        console.log("1 INSTRUKSJON:", op);
        throw 1
      }
    } else if (split.length == 3) {
      const [y, op, z] = split
      const left = (wire[y] ?? +y)
      const right = (wire[z] ?? +z)
      if (isNaN(left) || isNaN(right)) {
        return false
      }
      if (op == 'AND') {
        wire[x] = left & right
      } else if (op == 'OR') {
        wire[x] = left | right
      } else if (op == 'LSHIFT') {
        wire[x] = left << right
      } else if (op == 'RSHIFT') {
        wire[x] = left >> right
      } else {
        console.log("2 INSTRUKSJONER:", op);
        throw 1
      }
    }
    if (wire[x] < 0) {
      wire[x] = 65536 + wire[x]
    }
    return true
  }
  input.forEach(asd => {
    queue = queue.filter(inst => {
      return !process(inst)
    })
    if (!process(asd)) {
      queue.push(asd)
    }
  });

  for (var i = 0; i < 1000 && queue.length; i++) {
    queue = queue.filter(inst => {
      return !process(inst)
    })
    console.log(queue.length);
  }

  console.log(wire);

  //console.log(wire);

  return wire['a']
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i
123 -> x`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: undefined }
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
