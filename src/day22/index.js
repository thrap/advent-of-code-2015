import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => +l.split(': ')[1])

const part1 = (rawInput) => {
  const [HP, MANA, ARMOR, BOSS] = [0, 1, 2, 3]

  const bossAttack = stats => stats.map((x, i) => i == HP ? x - Math.max(1, bossDamage - stats[ARMOR]) : x)
  const missile = stats => stats.map((x, i) => i == MANA ? x - 53 : (i == BOSS ? x - 4 : x))
  const drain = stats => stats.map((x, i) => i == MANA ? x - 73 : (i == BOSS ? x - 2 : (i == HP ? x + 2 : x)))

  const castShield = stats => stats.map((x, i) => i == MANA ? x - 113 : x)
  const shield = stats => stats.map((x, i) => i == ARMOR ? 7 : x)
  const castPoison = stats => stats.map((x, i) => i == MANA ? x - 173 : x)
  const poison = stats => stats.map((x, i) => i == BOSS ? x - 3 : x)
  const castRecharge = stats => stats.map((x, i) => i == MANA ? x - 229 : x)
  const recharge = stats => stats.map((x, i) => i == MANA ? x + 101 : x)

  var minMana = Number.MAX_VALUE
  const fight = (turn, stats, shieldDuration, poisonDuration, rechargeDuration, casts, mana) => {

    if (mana > minMana || stats[HP] <= 0 || stats[MANA] < 0) return

    if (shieldDuration >= 0) {
      stats = shield(stats)
    } else {
      stats = stats.map((x, i) => i == ARMOR ? 0 : x)
    }
    if (poisonDuration >= 0) {
      stats = poison(stats)
    }
    if (rechargeDuration >= 0) {
      stats = recharge(stats)
    }

    if (stats[BOSS] <= 0) {
      if (minMana > mana) {
        minMana = mana
        console.log(mana, casts);
      }
      return true
    }

    if (turn % 2 == 0) {
      if (stats[HP] <= 0)
        return
      fight(turn + 1, missile(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts.concat(['missile']), mana + 53)
      fight(turn + 1, drain(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts.concat(['drain']), mana + 73)
      if (shieldDuration <= 0) {
        fight(turn + 1, castShield(stats), 5, poisonDuration - 1, rechargeDuration - 1, casts.concat(['shield']), mana + 113)
      }
      if (poisonDuration <= 0) {
        fight(turn + 1, castPoison(stats), shieldDuration - 1, 5, rechargeDuration - 1, casts.concat(['poison']), mana + 173)
      }
      if (rechargeDuration <= 0) {
        fight(turn + 1, castRecharge(stats), shieldDuration -1, poisonDuration - 1, 4, casts.concat(['recharge']), mana + 229)
      }
    } else {
      fight(turn + 1, bossAttack(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts, mana)
    }
  }
  const [bossHp, bossDamage] = parseInput(rawInput)



  const initialStats = []
  initialStats[HP] = 50
  initialStats[MANA] = 500
  initialStats[ARMOR] = 0
  initialStats[BOSS] = bossHp

  fight(0, initialStats, -1, -1, -1, [], 0)

  return minMana
}

const part2 = (rawInput) => {
  const [HP, MANA, ARMOR, BOSS] = [0, 1, 2, 3]

  const bossAttack = stats => stats.map((x, i) => i == HP ? x - Math.max(1, bossDamage - stats[ARMOR]) : x)
  const missile = stats => stats.map((x, i) => i == MANA ? x - 53 : (i == BOSS ? x - 4 : x))
  const drain = stats => stats.map((x, i) => i == MANA ? x - 73 : (i == BOSS ? x - 2 : (i == HP ? x + 2 : x)))

  const castShield = stats => stats.map((x, i) => i == MANA ? x - 113 : x)
  const shield = stats => stats.map((x, i) => i == ARMOR ? 7 : x)
  const castPoison = stats => stats.map((x, i) => i == MANA ? x - 173 : x)
  const poison = stats => stats.map((x, i) => i == BOSS ? x - 3 : x)
  const castRecharge = stats => stats.map((x, i) => i == MANA ? x - 229 : x)
  const recharge = stats => stats.map((x, i) => i == MANA ? x + 101 : x)

  var minMana = Number.MAX_VALUE
  const fight = (turn, stats, shieldDuration, poisonDuration, rechargeDuration, casts, mana) => {

    if (mana > minMana || stats[HP] <= 0 || stats[MANA] < 0) return

    if (shieldDuration >= 0) {
      stats = shield(stats)
    } else {
      stats = stats.map((x, i) => i == ARMOR ? 0 : x)
    }
    if (poisonDuration >= 0) {
      stats = poison(stats)
    }
    if (rechargeDuration >= 0) {
      stats = recharge(stats)
    }

    if (stats[BOSS] <= 0) {
      if (minMana > mana) {
        minMana = mana
        console.log(mana, casts);
      }
      return true
    }

    if (turn % 2 == 0) {
      stats = stats.map((x, i) => i == HP ? x - 1: x)
      if (stats[HP] <= 0)
        return
      fight(turn + 1, missile(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts.concat(['missile']), mana + 53)
      fight(turn + 1, drain(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts.concat(['drain']), mana + 73)
      if (shieldDuration <= 0) {
        fight(turn + 1, castShield(stats), 5, poisonDuration - 1, rechargeDuration - 1, casts.concat(['shield']), mana + 113)
      }
      if (poisonDuration <= 0) {
        fight(turn + 1, castPoison(stats), shieldDuration - 1, 5, rechargeDuration - 1, casts.concat(['poison']), mana + 173)
      }
      if (rechargeDuration <= 0) {
        fight(turn + 1, castRecharge(stats), shieldDuration -1, poisonDuration - 1, 4, casts.concat(['recharge']), mana + 229)
      }
    } else {
      fight(turn + 1, bossAttack(stats), shieldDuration - 1, poisonDuration - 1, rechargeDuration - 1, casts, mana)
    }
  }
  const [bossHp, bossDamage] = parseInput(rawInput)



  const initialStats = []
  initialStats[HP] = 50
  initialStats[MANA] = 500
  initialStats[ARMOR] = 0
  initialStats[BOSS] = bossHp

  fight(0, initialStats, -1, -1, -1, [], 0)

  return minMana
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
