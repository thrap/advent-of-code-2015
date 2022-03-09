import run from "aocrunner"

const parseInput = rawInput => rawInput.replace(/,/g, '').split('\n')

const execute = (register, program) => {
  var i = 0
  while (i < program.length) {
    const [inst, reg, offset] = program[i].split(' ')
    const idx = reg == 'a' ? 0 : 1
    if (inst == 'inc') {
      register[idx] ++
    } else if (inst == 'tpl') {
      register[idx] *= 3
    } else if (inst == 'hlf') {
      register[idx] = Math.floor(register[idx] / 2)
    } else if (inst == 'jmp') {
      i += +reg
      continue
    } else if (inst == 'jie') {
      if (register[idx] % 2 == 0) {
        i += +offset
        continue
      }
    } else if (inst == 'jio') {
      if (register[idx] == 1) {
        i += +offset
        continue
      }
    }
    i++
  }
  return register[1]
}

const part1 = (rawInput) => {
  const program = parseInput(rawInput)

  return execute([0,0], program)
}

const part2 = (rawInput) => {
  const program = parseInput(rawInput)

  return execute([1,0], program)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
