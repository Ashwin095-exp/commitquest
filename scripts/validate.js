import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, basename } from 'node:path'

const CATEGORIES = ['monsters', 'items', 'achievements', 'classes']

const schemaValidators = {
  monsters: validateMonster,
  items: validateItem,
  achievements: validateAchievement,
  classes: validateClass,
}

let errors = 0

for (const category of CATEGORIES) {
  const dir = join('data', category)
  if (!existsSync(dir)) continue

  const files = readdirSync(dir).filter(f => f.endsWith('.json'))

  for (const file of files) {
    const path = join(dir, file)
    try {
      const data = JSON.parse(readFileSync(path, 'utf-8'))
      const issues = schemaValidators[category](data, file)
      if (issues.length > 0) {
        for (const issue of issues) {
          console.error(`FAIL  ${path}: ${issue}`)
          errors++
        }
      } else {
        console.log(`  OK  ${path}`)
      }
    } catch (e) {
      console.error(`FAIL  ${path}: invalid JSON — ${e.message}`)
      errors++
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} validation error(s) found.`)
  process.exit(1)
} else {
  console.log('\nAll data files valid.')
}

function validateMonster(data, file) {
  const issues = []
  if (!data.name) issues.push('missing "name"')
  if (!data.description) issues.push('missing "description"')
  if (!['easy', 'medium', 'hard', 'boss'].includes(data.difficulty))
    issues.push('invalid "difficulty" — must be easy, medium, hard, or boss')
  if (!Number.isInteger(data.hp) || data.hp < 1 || data.hp > 1000)
    issues.push('"hp" must be an integer between 1 and 1000')
  if (!Number.isInteger(data.attack) || data.attack < 1 || data.attack > 100)
    issues.push('"attack" must be an integer between 1 and 100')
  if (!Number.isInteger(data.xp_reward) || data.xp_reward < 1 || data.xp_reward > 500)
    issues.push('"xp_reward" must be an integer between 1 and 500')
  if (data.drop_chance !== undefined && (data.drop_chance < 0 || data.drop_chance > 1))
    issues.push('"drop_chance" must be between 0.0 and 1.0')
  return issues
}

function validateItem(data, file) {
  const issues = []
  if (!data.name) issues.push('missing "name"')
  if (!data.description) issues.push('missing "description"')
  if (!['common', 'uncommon', 'rare', 'epic', 'legendary'].includes(data.rarity))
    issues.push('invalid "rarity" — must be common, uncommon, rare, epic, or legendary')
  if (!data.stat_bonus || typeof data.stat_bonus !== 'object')
    issues.push('missing "stat_bonus" object')
  return issues
}

function validateAchievement(data, file) {
  const issues = []
  if (!data.name) issues.push('missing "name"')
  if (!data.description) issues.push('missing "description"')
  if (!data.trigger || !data.trigger.event || !data.trigger.count)
    issues.push('missing or incomplete "trigger" (needs event and count)')
  if (!Number.isInteger(data.xp_reward) || data.xp_reward < 1 || data.xp_reward > 1000)
    issues.push('"xp_reward" must be an integer between 1 and 1000')
  return issues
}

function validateClass(data, file) {
  const issues = []
  if (!data.name) issues.push('missing "name"')
  if (!data.description) issues.push('missing "description"')
  if (!['str', 'int', 'dex', 'con'].includes(data.primary_stat))
    issues.push('invalid "primary_stat" — must be str, int, dex, or con')
  if (!data.stat_bonus || typeof data.stat_bonus !== 'object')
    issues.push('missing "stat_bonus" object')
  if (!Array.isArray(data.file_patterns) || data.file_patterns.length === 0)
    issues.push('"file_patterns" must be a non-empty array')
  return issues
}
