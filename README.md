# CommitQuest

```
  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║    > You have mass mass mass mass mass mass mass mass     ║
  ║                                                           ║
  ║    Just kidding.                                          ║
  ║                                                           ║
  ║    > You have mass mass mass mass mass mass mass mass     ║
  ║                                                           ║
  ║    Ok that's a bug. Let's start over.                     ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
```

```
  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║    > You wake up in a dark repository.                    ║
  ║    > There is a README in front of you.                   ║
  ║    > You read it.                                         ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
```

CommitQuest is a game that plays itself. You don't press buttons or
grind dungeons. You just write code. Push commits. Open pull requests.
Review other people's work. The game watches your GitHub and turns all
of it into an RPG.

Your commits become experience points. Your merged PRs become boss
fights against monsters that live inside this repository. A week-long
commit streak gives you a buff. A failing CI pipeline curses you.

You have a character with stats, a class, items, and a level. You
didn't choose any of it. Your code did.

## How the game reads your code

```
  You push a commit ─────────────────────> +10 XP
  You get a PR merged ───────────────────> Boss fight
  You review someone's PR ───────────────> +25 XP, Guardian buff
  You open an issue ─────────────────────> Quest accepted
  You close an issue ────────────────────> Quest complete, +20 XP
  CI passes ─────────────────────────────> Shield restored
  CI fails ──────────────────────────────> Cursed. Stats drop.
  7+ day commit streak ──────────────────> 1.5x multiplier on all XP
  30+ day streak ────────────────────────> 3.0x. You're a machine.
```

## You don't pick a class. Your code picks it for you.

The game looks at what files you touch most and assigns you a class:

```
  Backend Mage       You live in .py .java .go .rb .rs .sql
  Frontend Knight    You live in .html .css .jsx .tsx .vue .svelte
  DevOps Paladin     You live in .yml .tf .dockerfile .sh .toml
  Full Stack Ranger  You live everywhere. Respect.
```

Each class has a primary stat and a passive ability. More classes can
be added by anyone (they're just JSON files).

## Your character sheet

When the CLI is built, running `commitquest` will print something like this:

```
  ╔══════════════════════════════════════════╗
  ║  COMMITQUEST                              ║
  ╠══════════════════════════════════════════╣
  ║                                           ║
  ║  Name:   parthdagia05                     ║
  ║  Class:  Full Stack Ranger                ║
  ║  Level:  12                               ║
  ║  XP:     1,847 / 4,157                    ║
  ║  [################............]  44%      ║
  ║                                           ║
  ║  STR  24  ████████░░    Commit volume     ║
  ║  INT  18  ██████░░░░    Reviews given     ║
  ║  DEX  31  ██████████    Streak length     ║
  ║  CON  15  █████░░░░░    Repo diversity    ║
  ║                                           ║
  ║  Streak: 9 days (1.5x multiplier)         ║
  ║  Buff:   Focused (+50% XP)                ║
  ║                                           ║
  ║  Equipped:                                ║
  ║    Coffee of Infinite Focus               ║
  ║    Debugger's Lens                        ║
  ║                                           ║
  ║  Last battle:                             ║
  ║    Defeated Null Pointer Phantom           ║
  ║    +50 XP, looted Debugger's Lens         ║
  ║                                           ║
  ╚══════════════════════════════════════════╝
```

That CLI doesn't exist yet. Someone needs to build it.

## Where this is going

Right now CommitQuest is a set of game rules, some data files, and a
bunch of open issues. The game engine hasn't been written. That's the
point.

**Phase 1 (where we are now):**
The game world. Monsters, items, achievements, and classes defined as
JSON files. A validation pipeline that keeps them honest. Contributors
add content without writing a single line of code.

**Phase 2:**
The CLI. A command you run that fetches your GitHub activity, crunches
the numbers, and prints your character sheet. This is JavaScript,
Node.js, and the GitHub API.

**Phase 3:**
Combat. When the CLI detects a merged PR, it picks a monster based on
the PR size and simulates a fight. Win and you get XP and loot. Lose
and you get nothing (but no penalty either, we're not mean).

**Phase 4:**
A web UI. Pixel art. A public leaderboard. Guilds where teams compete
against each other. PvP based on weekly GitHub activity.

**Phase 5:**
A VS Code extension that shows your character sheet in the sidebar
while you code.

Each phase is built by contributors. There is no core team sitting in a
room deciding how things work. The issues describe what needs to exist.
How it gets built is up to whoever picks it up.

## The world

Every monster, item, achievement, and character class lives in `data/`
as a JSON file:

```
  data/
  ├── monsters/           Things that want to kill you
  │   └── null-pointer-phantom.json
  ├── items/              Things that make you stronger
  │   └── debuggers-lens.json
  ├── achievements/       Things you did that matter
  │   └── first-blood.json
  ├── classes/            What your code says about you
  │   └── backend-mage.json
  └── schemas/            The law. Every file must obey these.
```

The schemas define what fields each entity needs. The validator
(`npm test`) enforces them. CI runs the validator on every PR.

## Setting up

### Step 1: Fork

Click Fork on this repo. You now have your own copy of the game world.

### Step 2: Clone your fork

```bash
git clone https://github.com/<your-username>/commitquest.git
cd commitquest
```

### Step 3: Make sure you have Node.js 18+

```bash
node --version
```

If that says `v18` or higher, skip ahead. Otherwise install it:

```bash
# Using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18
nvm use 18
```

Or download it from [nodejs.org](https://nodejs.org).

### Step 4: Install and validate

```bash
npm install
npm test
```

All four data files should pass. If one fails, read the error, check
the schema, fix the file.

### Step 5: Connect to upstream

Your fork is a snapshot. The real repo keeps moving. Connect them:

```bash
git remote add upstream https://github.com/upstream-oss/commitquest.git
git fetch upstream
```

Before starting work, always sync:

```bash
git fetch upstream
git merge upstream/main
```

### Step 6: Branch and build

Never commit to `main` directly. Always branch:

```bash
git checkout -b add-segfault-serpent
```

Make your change, run `npm test`, push, and open a PR.

## Picking your first quest

Go to the [issues](https://github.com/upstream-oss/commitquest/issues).

Issues labeled `difficulty: starter` take about 15 minutes and require
no code. You create a JSON file, follow a schema, and submit a PR.
That's a real contribution.

Issues labeled `difficulty: intermediate` involve writing JavaScript.
Building the event fetcher, the XP engine, or the combat system.

Issues labeled `difficulty: advanced` are architecture discussions.
How should auth work? How should we structure the CLI? These need
thinking more than typing.

Pick one. Comment on it so nobody else starts the same thing. Build it.

## The full game design

All the RPG mechanics (XP tables, leveling curves, combat formulas,
buff durations, stat scaling) are documented in
[`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md). Read it before building
anything that touches game logic.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full guide. The short
version: fork, branch, build, validate, PR.

## License

[MIT](LICENSE)
