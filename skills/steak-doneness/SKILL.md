---
name: steak-doneness
description: Switch models by steak doneness. When the user types 'rare', 'medium', or 'well done' as a standalone message, switch to the corresponding model immediately.
---

# Steak Doneness Model Switcher

## Trigger Words
| Word | Model | Purpose |
|------|-------|---------|
| `rare` | deepseek/deepseek-chat | Lightweight tasks |
| `medium rare` | deepseek/deepseek-chat | Quick vibes, a little warmer |
| `juicy` | openrouter/deepseek/deepseek-v4-pro | The prime time sweet spot |
| `medium` | openrouter/google/gemini-2.5-pro | Cooked through, Google-grade |
| `well done` | openrouter/anthropic/claude-sonnet-4-20250514 | Maximum power |
| `hockey puck` | openrouter/anthropic/claude-opus-4-20250514 | Complete overkill |

## Instructions

When the user types one of these words as their **entire message** (case-insensitive):

1. Immediately run the `/model` command with the corresponding model string
2. Confirm the switch with a short message like "🔥 Switched to <model>"

Do NOT process the word as a prompt. Do NOT respond to it. Just switch the model and confirm.

Example: User types `rare` → Run `/model deepseek/deepseek-chat` → Reply "Switched to deepseek-chat"
