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
| `medium rare` | 🥩🔥💧💧 | 135°F | `deepseek-v4-flash` | Warm red center. Just enough heat to wake it up. |
| `juicy` | 🥩🔥🔥💧 | 145°F | `mimo-v2.5-pro` | Prime time. Pink, tender, and dripping with MiMo intelligence. |
| `medium` | 🥩🔥🔥🔥 | 150°F | `gemini-2.5-pro` | The workhorse. Cooked through, Google-grade, still tender. |
| `well done` | 🥩🔥🔥🔥🔥 | 160°F | `claude-sonnet-4` | Fully seared. No pink, no nonsense, maximum power. |
| `hockey puck` | 🏒 | 180°F | `claude-opus-4` | You ordered the puck. No pink, no mercy, maximum overkill. |

## Secret Commands

| Command | Effect |
|---|---|
| `/steak` or `menu` | Displays the full steakhouse menu |
| `fact` or `meat fact` | Drops a random meat fact (educational!) |
| `tip` or `chef tip` | Pro cooking advice from the chef 🧑‍🍳 (we've got 24 steak tips — get it?) |

### Sample Meat Facts
> *"The Maillard reaction requires 300°F. Your GPU hits that just compiling Rust."*

> *"'Well done' was requested by King Charles I. He was later executed."*

> *"Dry-aged beef loses 30% moisture. Dry-aged codebases lose 100% documentation."*

### Sample Chef Tips
> *"🔥 Make sure your pan is hot enough BEFORE you put the meat in. Sizzle on contact or you're steaming, not searing."*

> *"🧈 Butter baste at the end. Tilt the pan, spoon that gold over the top. You're welcome."*

> *"🔪 Slice against the grain. Otherwise you're chewing steak-flavored rubber bands."*

## What's Inside

Pi-Carnity ships both an **extension** and a **skill**:

| Component | File | What It Does |
|---|---|---|
| Extension | `steak-doneness.ts` | Intercepts input events. Catches your order before the model even sees it. Reliable. |
| Skill | `skills/steak-doneness/SKILL.md` | LLM-readable instructions. Portable across any agent harness that speaks the Agent Skills spec. |

### Why Both?

The extension is the kitchen — fast, precise, never misses an order. The skill is the recipe card — any chef (agent) can read it and cook the same dish, even without our custom stove.

## Philosophy

Why steak? Because juicy is the sweet spot. Because rare is for quick vibes and hockey puck is for when you need Claude to think *really hard* about your life choices — and your wallet.

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

AGPL-3.0. Grill freely, but share your sauce.

---

🔥 *"If it's not sizzling, you're not trying hard enough."* 🔥
