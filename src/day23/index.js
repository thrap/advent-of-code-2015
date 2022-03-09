import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.replace(/,/g, '').split('\n')//.map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const register = [0, 0]

  var i = 0
  while (i < input.length) {
    const [inst, reg, offset] = input[i].split(' ')
    const idx = reg == 'a' ? 0 : 1
    if (inst == 'inc') {
      register[idx] ++
      i++
    } else if (inst == 'tpl') {
      register[idx] *= 3
      i++
    } else if (inst == 'hlf') {
      register[idx] = Math.floor(register[idx] / 2)
      i++
    } else if (inst == 'jmp') {
      i += +reg
    } else if (inst == 'jie') {
      if (register[idx] % 2 == 0) {
        i += +offset
      } else {
        i++
      }
    } else if (inst == 'jio') {
      if (register[idx] == 1) {
        i += +offset
      } else {
        i++
      }
    } else {
      throw 1
    }
  }

  return register[1]
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
