# CommitQuest ⚔️

**Your GitHub activity powers an RPG character.**

Commits give you XP. Merged PRs are boss fights. A commit streak is a buff.
A failing CI run? That's a curse.

CommitQuest turns your real coding work into a game — level up, collect items,
fight monsters, and climb the leaderboard just by shipping code.

## How It Works

| GitHub Event        | Game Effect                        |
|---------------------|------------------------------------|
| Commit pushed       | +XP (scales with streak)           |
| PR merged           | Boss fight — defeat a monster      |
| PR reviewed         | +XP bonus, "Guardian" buff         |
| Issue opened        | Quest accepted                     |
| Issue closed        | Quest completed, +XP               |
| CI passing          | Shield restored                    |
| CI failing          | Cursed — stats debuffed            |
| Commit streak (7d+) | Streak multiplier on all XP        |

## Game Entities

The game world is built from simple data files anyone can contribute:

- **Monsters** — enemies you fight when PRs merge (`data/monsters/`)
- **Items** — gear and power-ups earned through achievements (`data/items/`)
- **Achievements** — milestones triggered by your activity (`data/achievements/`)
- **Classes** — character archetypes based on what you code (`data/classes/`)

Each entity is a JSON file that follows a schema. See the `data/schemas/` folder
for the structure, or look at the examples already in each folder.

## Project Status

> 🚧 **This project is in its earliest stage.**
> We have the vision, the data schemas, and a set of open issues.
> The actual game engine, CLI, and UI are yet to be built — by you.

Check the [issues](https://github.com/upstream-oss/commitquest/issues) to find
something to work on.

## Quick Start

```bash
# Clone the repo
git clone https://github.com/upstream-oss/commitquest.git
cd commitquest

# Install dependencies
npm install

# Run schema validation
npm test
```

## Contributing

We welcome contributions of all sizes — from adding a single monster to
building core game systems. Read our [Contributing Guide](CONTRIBUTING.md)
to get started.

**Your first PR can be as simple as adding a new monster or item.** No code
needed — just a JSON file.

## Roadmap

- [x] Game design and data schemas
- [ ] CLI that fetches GitHub events and prints a character sheet
- [ ] XP calculation engine
- [ ] Monster encounter system
- [ ] ASCII art character sheet renderer
- [ ] Web UI with pixel art
- [ ] Guilds (team-based play)
- [ ] Leaderboard
- [ ] VS Code extension

## License

[MIT](LICENSE)
