import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => l.split('').map(c => c == '#'))

const step = state => {
  const dirs = [[0,-1],[0,1],[1,-1],[1,0],[1,1],[-1,-1],[-1,0],[-1,1]]

  const turnsOn = (x, y) => {
    const count = dirs.filter(([dx, dy]) => state[x+dx]?.[y+dy]).length
    return count == 3 || (state[x][y] && count == 2)
  }

  return state.map((l, x) => l.map((_, y) => turnsOn(x, y)))
}

const part1 = (rawInput) => {
  var state = parseInput(rawInput)

  for(var i = 1; i <= 100; i++) {
    state = step(state)
  }

  return state.flat().filter(x => x).length
}

const part2 = (rawInput) => {
  const lightCorners = state => {
    state[0][0] = true
    state[state.length-1][0] = true
    state[0][state.length-1] = true
    state[state.length-1][state.length-1] = true
    return state
  }

  var state = lightCorners(parseInput(rawInput))

  for(var i = 1; i <= 100; i++) {
    state = lightCorners(step(state))
  }

  return state.flat().filter(x => x).length
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
