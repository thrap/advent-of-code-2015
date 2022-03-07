import run from "aocrunner"

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split(' -> '))

const process = (wire, [inst, x]) => {
  if (wire[x]) return true

  const split = inst.split(' ')
  if (split.length == 1) {
    if (isNaN(wire[inst] ?? +inst))
      return false

    wire[x] = wire[inst] ?? +inst
  } else if (split.length == 2) {
    const [op, y] = split
    if (isNaN((wire[y] ?? +y)))
      return false

    if (op == 'NOT') {
      wire[x] = ~(wire[y] ?? +y)
    }
  } else if (split.length == 3) {
    const [y, op, z] = split
    const left = (wire[y] ?? +y)
    const right = (wire[z] ?? +z)
    if (isNaN(left) || isNaN(right))
      return false

    if (op == 'AND') {
      wire[x] = left & right
    } else if (op == 'OR') {
      wire[x] = left | right
    } else if (op == 'LSHIFT') {
      wire[x] = left << right
    } else if (op == 'RSHIFT') {
      wire[x] = left >> right
    }
  }
  if (wire[x] < 0) {
    wire[x] = 65536 + wire[x]
  }
  return true
}

const part1 = (rawInput) => {
  const wire = {}
  var queue = parseInput(rawInput)

  while (queue.length) {
    queue = queue.filter(inst => !process(wire, inst))
  }

  return wire['a']
}

const part2 = (rawInput) => {
  const wire = {}
  wire['b'] = part1(rawInput)

  var queue = parseInput(rawInput)

  while (queue.length) {
    queue = queue.filter(inst => !process(wire, inst))
  }

  return wire['a']
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
