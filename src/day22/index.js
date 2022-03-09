import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => +l.split(': ')[1])

const [HP, MANA, ARMOR, BOSS] = [0, 1, 2, 3]
const missile = stats => stats.map((x, i) => i == MANA ? x - 53 : (i == BOSS ? x - 4 : x))
const drain = stats => stats.map((x, i) => i == MANA ? x - 73 : (i == BOSS ? x - 2 : (i == HP ? x + 2 : x)))

const castShield = stats => stats.map((x, i) => i == MANA ? x - 113 : x)
const shieldEffect = stats => stats.map((x, i) => i == ARMOR ? 7 : x)
const castPoison = stats => stats.map((x, i) => i == MANA ? x - 173 : x)
const poisonEffect = stats => stats.map((x, i) => i == BOSS ? x - 3 : x)
const castRecharge = stats => stats.map((x, i) => i == MANA ? x - 229 : x)
const rechargeEffect = stats => stats.map((x, i) => i == MANA ? x + 101 : x)

const minMana = (bossHp, bossDamage, playerTurnEffect) => {
  const bossAttack = stats => stats.map((x, i) => i == HP ? x - Math.max(1, bossDamage - stats[ARMOR]) : x)

  var minMana = Number.MAX_VALUE

  const simulate = (turn, stats, shield, poison, recharge, mana) => {

    if (mana > minMana || stats[HP] <= 0 || stats[MANA] < 0) return

    if (shield >= 0) {
      stats = shieldEffect(stats)
    } else {
      stats = stats.map((x, i) => i == ARMOR ? 0 : x)
    }
    if (poison >= 0) {
      stats = poisonEffect(stats)
    }
    if (recharge >= 0) {
      stats = rechargeEffect(stats)
    }

    if (stats[BOSS] <= 0) {
      minMana = Math.min(minMana, mana)
      return
    }

    if (turn % 2 == 1) {
      simulate(turn + 1, bossAttack(stats), shield - 1, poison - 1, recharge - 1, mana)
      return
    }

    stats = playerTurnEffect(stats)

    simulate(turn + 1, missile(stats), shield - 1, poison - 1, recharge - 1, mana + 53)
    simulate(turn + 1, drain(stats), shield - 1, poison - 1, recharge - 1, mana + 73)
    if (shield <= 0) {
      simulate(turn + 1, castShield(stats), 5, poison - 1, recharge - 1, mana + 113)
    }
    if (poison <= 0) {
      simulate(turn + 1, castPoison(stats), shield - 1, 5, recharge - 1, mana + 173)
    }
    if (recharge <= 0) {
      simulate(turn + 1, castRecharge(stats), shield - 1, poison - 1, 4, mana + 229)
    }
  }

  simulate(0, [50, 500, 0, bossHp], -1, -1, -1, 0)
  return minMana
}

const part1 = (rawInput) => {
  const [bossHp, bossDamage] = parseInput(rawInput)

  return minMana(bossHp, bossDamage, stats => stats)
}

const part2 = (rawInput) => {
  const [bossHp, bossDamage] = parseInput(rawInput)

  return minMana(bossHp, bossDamage, stats => stats.map((x, i) => i == HP ? x - 1: x))
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
