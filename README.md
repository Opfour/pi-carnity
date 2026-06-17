# pi-steak-doneness

Models switching by comparative steak doneness. 
(Translation: it's an easy way for my fat ass to remember which model to employ based on basic, typical, and/or intensive tasks using Deepseek and Claude :D )

Extension + skill combo for pi.

## Install

```bash
pi install git:github.com/Opfour/pi-steak-doneness
```

## Usage

Type any of these as a standalone message:

| Word | Model |
|------|-------|
| `rare` | deepseek-chat |
| `medium` | deepseek-v4-pro |
| `well done` | claude-sonnet-4 |

## How It Works

- **Extension** (`steak-doneness.ts`): Intercepts input events. Most reliable.
- **Skill** (`skills/steak-doneness/SKILL.md`): Instructions for LLM-based agents. Portable across harnesses.
