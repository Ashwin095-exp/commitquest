# CommitQuest ⚔️

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   You don't play CommitQuest.                            ║
║   Your code plays it for you.                            ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

Every commit is XP. Every merged PR is a boss fight. A 7-day streak?
That's a buff. A failing CI run? You just got cursed.

CommitQuest reads your real GitHub activity and turns it into an RPG.
Level up, fight monsters, collect loot, pick a class, and climb the
leaderboard. All by doing what you already do: shipping code.

## The Rules

```
 ┌─────────────────────┬────────────────────────────────────┐
 │ GitHub Event         │ What Happens To You                │
 ├─────────────────────┼────────────────────────────────────┤
 │ Commit pushed        │ +XP (scales with your streak)      │
 │ PR merged            │ Boss fight. Kill or be killed.      │
 │ PR reviewed          │ +XP bonus, "Guardian" buff          │
 │ Issue opened         │ New quest accepted                  │
 │ Issue closed         │ Quest complete, +XP                 │
 │ CI passing           │ Shield restored                     │
 │ CI failing           │ CURSED. Stats debuffed.             │
 │ 7+ day streak        │ Streak multiplier on ALL XP         │
 └─────────────────────┴────────────────────────────────────┘
```

## Your Character

Your class is auto-assigned based on what files you touch:

```
  🧙 Backend Mage        .py .java .go .rb .rs .sql
  ⚔️  Frontend Knight      .html .css .jsx .tsx .vue .svelte
  🛡️  DevOps Paladin       .yml .tf .dockerfile .sh .toml
  🏹 Full Stack Ranger     A bit of everything
```

Four stats. All derived from your activity. No manual builds.

```
  STR  ███████░░░  Commit volume
  INT  █████████░  PR reviews given
  DEX  ████████░░  Streak length
  CON  ██████░░░░  Repo diversity
```

## The World

The game world lives in `data/`. Every monster, item, achievement, and
class is a JSON file that anyone can add.

```
data/
├── monsters/       Enemies you fight when PRs merge
├── items/          Gear earned through combat and achievements
├── achievements/   One-time milestones from your activity
├── classes/        Character archetypes
└── schemas/        The rules each file must follow
```

Want to add a monster? Create a `.json` file, follow the schema, open a PR.
Your first contribution can take 15 minutes.

## Getting Started

> This is not a `git clone && npm start` kind of setup.
> You're joining an RPG. Treat it like one.

### Step 1: Fork the quest

Fork this repo. This is your copy of the world. You'll submit changes
back via pull requests (that's how boss fights work, remember?).

### Step 2: Set up your environment

```bash
git clone https://github.com/<your-username>/commitquest.git
cd commitquest
```

You need **Node.js 18+**. Check with:

```bash
node --version
```

Don't have it? Install it from [nodejs.org](https://nodejs.org) or use
[nvm](https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18
nvm use 18
```

### Step 3: Install and validate

```bash
npm install
npm test
```

You should see every data file pass validation:

```
  OK  data/monsters/null-pointer-phantom.json
  OK  data/items/debuggers-lens.json
  OK  data/achievements/first-blood.json
  OK  data/classes/backend-mage.json

All data files valid. ✓
```

If something fails, you broke a schema. Fix it before going further.

### Step 4: Set up your upstream remote

You need to sync with the original repo, not just your fork:

```bash
git remote add upstream https://github.com/upstream-oss/commitquest.git
git fetch upstream
```

Verify it:

```bash
git remote -v
```

You should see both `origin` (your fork) and `upstream` (this repo).

### Step 5: Create a branch and start your quest

```bash
git checkout -b add-my-first-monster
```

Now go pick an [issue](https://github.com/upstream-oss/commitquest/issues),
build something, and open a PR.

## What's Been Built (and What Hasn't)

```
  [■■░░░░░░░░]  20% complete
```

Done:
- Game design and RPG mechanics (`docs/GAME_DESIGN.md`)
- Data schemas for all entity types
- Validation script and CI pipeline
- Example entities (one per category)

Not done (yet):
- CLI that fetches your GitHub events
- XP calculation engine
- Monster encounter / combat system
- ASCII character sheet renderer
- Web UI with pixel art
- Guilds, PvP, leaderboard
- VS Code extension

The engine, the UI, the entire game? That's what the
[issues](https://github.com/upstream-oss/commitquest/issues) are for.
Some are 15-minute data tasks. Some are full features. Pick your level.

## Sample Character Sheet

This is what `commitquest` will print when it's built:

```
╔══════════════════════════════════════╗
║  COMMITQUEST                         ║
╠══════════════════════════════════════╣
║                                      ║
║  Name:   parthdagia05                ║
║  Class:  Full Stack Ranger 🏹        ║
║  Level:  12                          ║
║  XP:     1,847 / 4,157              ║
║  ▓▓▓▓▓▓▓▓▓░░░░░░░░░  44%           ║
║                                      ║
║  STR: 24   INT: 18                   ║
║  DEX: 31   CON: 15                   ║
║                                      ║
║  🔥 Streak: 9 days (1.5x)           ║
║  ✨ Buff: Focused (+50% XP)         ║
║                                      ║
║  Equipped:                           ║
║    ☕ Coffee of Infinite Focus        ║
║    🔍 Debugger's Lens                ║
║                                      ║
║  Last Battle:                        ║
║    Defeated Null Pointer Phantom!     ║
║    +50 XP, looted Debugger's Lens    ║
║                                      ║
╚══════════════════════════════════════╝
```

## Contributing

Read the [Contributing Guide](CONTRIBUTING.md). The short version:

1. Pick an [issue](https://github.com/upstream-oss/commitquest/issues)
2. Fork, branch, build, validate (`npm test`)
3. Open a PR
4. That's it. You just fought a boss.

## License

[MIT](LICENSE)
