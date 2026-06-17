import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const DONENESS: Record<string, { model: string; temp: string; art: string; catchphrase: string }> = {
  rare: {
    model: "deepseek/deepseek-chat",
    temp: "125°F",
    art: "🥩💧💧💧",
    catchphrase: "Barely kissed the grill. Efficient and bloody brilliant.",
  },
  "medium rare": {
    model: "deepseek/deepseek-chat",
    temp: "135°F",
    art: "🥩🔥💧💧",
    catchphrase: "Warm red center. Just enough heat to wake it up.",
  },
  juicy: {
    model: "openrouter/deepseek/deepseek-v4-pro",
    temp: "145°F",
    art: "🥩🔥🔥💧",
    catchphrase: "Prime time. Pink, tender, and dripping with intelligence.",
  },
  medium: {
    model: "openrouter/google/gemini-2.5-pro",
    temp: "150°F",
    art: "🥩🔥🔥🔥",
    catchphrase: "The workhorse. Cooked through, Google-grade, still tender.",
  },
  "well done": {
    model: "openrouter/anthropic/claude-sonnet-4-20250514",
    temp: "160°F",
    art: "🥩🔥🔥🔥🔥",
    catchphrase: "Fully seared. No pink, no nonsense, maximum power.",
  },
  "hockey puck": {
    model: "openrouter/anthropic/claude-opus-4-20250514",
    temp: "180°F",
    art: "🏒",
    catchphrase: "You ordered the puck. No pink, no mercy, maximum overkill.",
  },
};

const FACTS = [
  "A steak loses ~25% of its weight during cooking. Models lose ~0%.",
  "The Maillard reaction requires 300°F. Your GPU hits that just compiling Rust.",
  "'Well done' was requested by King Charles I. He was later executed.",
  "The world's most expensive steak: $3,200 wagyu. The most expensive token: Claude Opus at scale.",
  "Dry-aged beef loses 30% moisture. Dry-aged codebases lose 100% documentation.",
];

export default function (pi: ExtensionAPI) {
  pi.on("input", async (event, ctx) => {
    const text = event.text.toLowerCase().trim();

    // Help command
    if (text === "/steak" || text === "menu") {
      const menu = Object.entries(DONENESS)
        .map(([k, v]) => `  ${k.padEnd(14)} ${v.art.padEnd(10)} ${v.temp.padEnd(8)} → ${v.model.split("/").pop()}`)
        .join("\n");
      pi.sendMessage({
        customType: "steak-menu",
        content: `🥩 **Pi-Carnity Steakhouse Menu** 🥩\n\n${menu}\n\nJust type your order. Chef's waiting.`,
        display: true,
      });
      return { action: "handled" };
    }

    // Random fact
    if (text === "fact" || text === "meat fact") {
      const fact = FACTS[Math.floor(Math.random() * FACTS.length)];
      pi.sendMessage({ customType: "steak-fact", content: `📖 **Meat Fact:** ${fact}`, display: true });
      return { action: "handled" };
    }

    // Model switch
    const steak = DONENESS[text];
    if (!steak) return { action: "continue" };

    pi.sendUserMessage(`/model ${steak.model}`, { deliverAs: "followUp" });
    ctx.ui.notify(
      `${steak.art} ${steak.temp} → ${steak.model.split("/")[steak.model.split("/").length - 1]} — "${steak.catchphrase}"`,
      text === "hockey puck" ? "error" : "info",
    );
    return { action: "handled" };
  });
}
