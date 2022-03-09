import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n').map(l => +l.split(': ')[1])

const [weapons, armor, rings] = `Weapons:    Cost  Damage  Armor
Dagger        8     4       0
Shortsword   10     5       0
Warhammer    25     6       0
Longsword    40     7       0
Greataxe     74     8       0

Armor:      Cost  Damage  Armor
Leather      13     0       1
Chainmail    31     0       2
Splintmail   53     0       3
Bandedmail   75     0       4
Platemail   102     0       5

Rings:      Cost  Damage  Armor
Damage +1    25     1       0
Damage +2    50     2       0
Damage +3   100     3       0
Defense +1   20     0       1
Defense +2   40     0       2
Defense +3   80     0       3`.split('\n\n').map(l => l.split('\n').slice(1).map(l => l.split(/ {2,}/).slice(1).map(x => +x)))

const part1 = (rawInput) => {
  const boss = parseInput(rawInput)

  const fight = (playerHp, playerDamage, playerArmor, bossHp, bossDamage, bossArmor) => {
    for (var i = 0; playerHp > 0 && bossHp > 0; i++) {
      if (i % 2 == 0) {
        bossHp -= Math.max(1, playerDamage - bossArmor)
      } else {
        playerHp -= Math.max(1, bossDamage - playerArmor)
      }
    }
    return i % 2 == 1
  }

  const player = [8, 5, 5]

  const addArr = ([a1, b1, c1], [a2, b2, c2]) => [a1 + a2, b1 + b2, c1 + c2]

  var min = Number.MAX_VALUE
  const tryEquipment = ([cost, damage, armor]) => {

    if (fight(100, damage, armor, ...boss)) {
      min = Math.min(min, cost)
    }
  }
  const equipRing = (weapon, armor) => {
    const stat = addArr(weapon, armor)
    tryEquipment(stat)
    for (var i = 0; i < rings.length; i++) {
      tryEquipment(addArr(stat, rings[i]))
      for (var j = i + 1; j < rings.length; j++) {
        tryEquipment(addArr(addArr(stat, rings[i]),rings[j]))
      }
    }
  }

  const equipArmor = (weapon) => {
    equipRing(weapon, [0,0,0])
    for (var i = 0; i < armor.length; i++) {
      equipRing(weapon, armor[i])
    }
  }

  const equip = () => {
    for (var i = 0; i < weapons.length; i++) {
      equipArmor(weapons[i])
    }
  }
  equip()

  return min
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
