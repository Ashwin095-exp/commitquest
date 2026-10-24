# Contributing to CommitQuest

Thanks for your interest in contributing! This guide will help you get started.

## Ways to Contribute

### 1. Add Game Content (No Code Required)

The easiest way to contribute is by adding a monster, item, achievement, or
character class. Each one is a single JSON file.

**Steps:**

1. Fork this repository
2. Pick what you want to add (monster, item, achievement, or class)
3. Copy the example file from that folder
4. Edit it with your own creation
5. Run `npm test` to validate your file
6. Open a pull request

**Example — adding a monster:**

```bash
cp data/monsters/null-pointer-phantom.json data/monsters/my-monster.json
# Edit my-monster.json with your monster's details
npm test        # Make sure it validates
```

See the schemas in `data/schemas/` for all available fields.

### 2. Work on a Feature

Check the [issues](https://github.com/upstream-oss/commitquest/issues) for
tasks labeled `good first issue` or `help wanted`. Some are small, some are
bigger — pick what interests you.

Before starting a large feature, open an issue or comment on an existing one
to discuss your approach.

### 3. Improve Documentation

Found a typo? Think something could be explained better? Docs PRs are always
welcome.

## Development Setup

```bash
git clone https://github.com/upstream-oss/commitquest.git
cd commitquest
npm install
```

### Running Tests

```bash
npm test          # Validate all data files against schemas
```

## Pull Request Guidelines

- **Keep PRs focused.** One monster per PR, one feature per PR.
- **Follow the schemas.** Run `npm test` before submitting.
- **Write a clear PR title.** Example: "Add monster: Merge Conflict Dragon"
- **Have fun with it.** Creative names, flavor text, and backstories are encouraged.

## Code Style

- JavaScript (ES Modules)
- No semicolons (we use a linter)
- Prefer `const` over `let`

## Game Content Guidelines

When creating monsters, items, achievements, or classes:

- **Be creative** — puns, coding references, and humor are welcome
- **Be appropriate** — keep it friendly and inclusive
- **Follow the schema** — required fields must be present
- **Write flavor text** — the `description` field is where personality lives
- **Balance matters** — check existing entities for stat ranges

## Questions?

Open an issue with the `question` label. We're happy to help!
