# 🥩 Pi-Carnity

> *"A model for every doneness. No gray, no bull."*

Pi-Carnity is a Pi package that lets you switch AI models by steak doneness. Because if you're going to cook with fire, you might as well do it in style.

## Installation

```bash
pi install git:github.com/Opfour/pi-carnity
```

Or clone it and grill it yourself:

```bash
git clone https://github.com/Opfour/pi-carnity.git
```

## The Menu

Just type your order. The chef handles the rest.

| Order | Art | Temp | Model | Vibe |
|---|---|---|---|---|
| `rare` | 🥩💧💧💧 | 125°F | `deepseek-chat` | Barely kissed the grill. Efficient and bloody brilliant. |
| `medium rare` | 🥩🔥💧💧 | 135°F | `deepseek-chat` | Warm red center. Just enough heat to wake it up. |
| `medium` | 🥩🔥🔥💧 | 145°F | `deepseek-v4-pro` | The sweet spot. Pink, juicy, gets the job done. |
| `medium well` | 🥩🔥🔥🔥 | 150°F | `deepseek-v4-pro` | A hint of pink. Serious business mode. |
| `well done` | 🥩🔥🔥🔥🔥 | 160°F | `claude-sonnet-4` | Fully seared. No pink, no nonsense, maximum power. |
| `congratulations` | 🧱 | 180°F | `claude-sonnet-4` | You asked for it. It's a hockey puck. Hope you're proud. |

## Secret Commands

| Command | Effect |
|---|---|
| `/steak` or `menu` | Displays the full steakhouse menu |
| `fact` or `meat fact` | Drops a random meat fact (educational!) |

### Sample Meat Facts
> *"The Maillard reaction requires 300°F. Your GPU hits that just compiling Rust."*

> *"'Well done' was requested by King Charles I. He was later executed."*

> *"Dry-aged beef loses 30% moisture. Dry-aged codebases lose 100% documentation."*

## What's Inside

Pi-Carnity ships both an **extension** and a **skill**:

| Component | File | What It Does |
|---|---|---|
| Extension | `steak-doneness.ts` | Intercepts input events. Catches your order before the model even sees it. Reliable. |
| Skill | `skills/steak-doneness/SKILL.md` | LLM-readable instructions. Portable across any agent harness that speaks the Agent Skills spec. |

### Why Both?

The extension is the kitchen — fast, precise, never misses an order. The skill is the recipe card — any chef (agent) can read it and cook the same dish, even without our custom stove.

## Philosophy

Why steak? Because medium is the default. Because rare is for quick vibes and well done is for when you need Claude to think *really hard* about your life choices. Because congratulations is for when you're feeling chaotic and want to watch the world burn.

Every model switch comes with a temperature, an emoji rating, and a Gordon Ramsay-adjacent catchphrase. This is non-negotiable.

## Hacking

Want different models? Edit `DONENESS` in `steak-doneness.ts`. Want different catchphrases? Same deal. Want to add "blue rare" at 115°F? Go for it — just don't blame us when the model hallucinates a raw file system.

```typescript
blue: {
  model: "openrouter/meta-llama/llama-4",
  temp: "115°F",
  art: "🥩❄️❄️❄️",
  catchphrase: "Still mooing. Expect creativity, not correctness.",
},
```

## License

MIT. Grill freely.

---

🔥 *"If it's not sizzling, you're not trying hard enough."* 🔥
