# Game Design Document

This document describes CommitQuest's game mechanics. Everything here is a
proposal — discuss changes in the issues.

## Core Loop

1. You code normally on GitHub
2. CommitQuest reads your public GitHub events
3. Events translate into XP, encounters, and effects
4. Your character levels up, fights monsters, and earns items

## XP System

| Event              | Base XP |
|--------------------|---------|
| Commit pushed      | 10      |
| PR opened          | 15      |
| PR merged          | 50      |
| PR review given    | 25      |
| Issue opened       | 10      |
| Issue closed       | 20      |

### Streak Multiplier

Consecutive days with at least one commit build a streak:

| Streak Days | Multiplier |
|-------------|------------|
| 1–2         | 1.0x       |
| 3–6         | 1.25x      |
| 7–13        | 1.5x       |
| 14–29       | 2.0x       |
| 30+         | 3.0x       |

Breaking a streak resets the multiplier to 1.0x.

## Leveling

XP thresholds follow a curve:

```
XP needed for level N = 100 * N^1.5
```

| Level | Total XP Needed |
|-------|-----------------|
| 1     | 0               |
| 2     | 100             |
| 5     | 1,118            |
| 10    | 3,162            |
| 20    | 8,944            |
| 50    | 35,355           |

## Character Stats

Every character has four stats:

- **STR** (Strength) — scales with commit volume
- **INT** (Intelligence) — scales with PR reviews given
- **DEX** (Dexterity) — scales with streak length
- **CON** (Constitution) — scales with repo diversity

Stats are derived from activity, not assigned manually.

## Character Classes

A class is assigned based on your dominant stat and coding patterns:

- **Backend Mage** — works mostly in server-side languages
- **Frontend Knight** — works mostly in UI/markup/style files
- **DevOps Paladin** — touches CI, infra, and config files
- **Full Stack Ranger** — balanced across all file types

Classes are defined in `data/classes/` and can be extended.

## Combat (Boss Fights)

When a PR is merged, you encounter a monster:

1. Monster is selected based on PR size (lines changed)
2. Your attack = STR + random(1, level)
3. Monster's HP must reach 0 to win
4. If you win: bonus XP + chance to earn an item
5. If you lose: no penalty, but no bonus either

PR size to monster difficulty:

| Lines Changed | Difficulty |
|---------------|------------|
| 1–50          | Easy       |
| 51–200        | Medium     |
| 201–500       | Hard       |
| 501+          | Boss       |

## Items

Items are passive bonuses earned through achievements or combat drops:

- Each item has a `stat_bonus` (e.g., +5 STR)
- A character can equip up to 5 items
- Items are defined in `data/items/`

## Achievements

Achievements are one-time milestones:

- Triggered by specific conditions (e.g., "10 PRs merged")
- Award XP and sometimes an item
- Defined in `data/achievements/`

## Curses and Buffs

| Condition                | Effect                      | Duration    |
|--------------------------|-----------------------------|-------------|
| CI passing               | Shield — blocks next curse  | Until used  |
| CI failing               | Cursed — -20% XP            | Until fixed |
| 7+ day streak            | Focused — +50% XP           | While active|
| PR review given          | Guardian — +10 INT          | 24 hours    |
| Weekend commit            | Night Owl — +5 DEX          | 24 hours    |

## The Character Sheet

The CLI displays a character sheet like:

```
╔══════════════════════════════════════╗
║  COMMITQUEST — Character Sheet      ║
╠══════════════════════════════════════╣
║  Name:   parthdagia05               ║
║  Class:  Full Stack Ranger          ║
║  Level:  12                         ║
║  XP:     1,847 / 4,157              ║
║                                     ║
║  STR: 24   INT: 18                  ║
║  DEX: 31   CON: 15                  ║
║                                     ║
║  Streak: 9 days (1.5x multiplier)   ║
║  Buff:   Focused (+50% XP)          ║
║                                     ║
║  Items:                             ║
║    ☕ Coffee of Infinite Focus       ║
║    🛡️ CI Shield                     ║
║                                     ║
║  Recent:                            ║
║    Defeated Null Pointer Phantom!    ║
║    Earned: +50 XP, Debugger's Lens  ║
╚══════════════════════════════════════╝
```
