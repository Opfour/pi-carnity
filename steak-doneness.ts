import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const DONENESS: Record<string, { model: string; temp: string; art: string; catchphrase: string }> = {
  rare: {
    model: "deepseek/deepseek-chat",
    temp: "125°F",
    art: "🥩💧💧💧",
    catchphrase: "Barely kissed the grill. Efficient and bloody brilliant.",
  },
  "medium rare": {
    model: "deepseek/deepseek-v4-flash",
    temp: "135°F",
    art: "🥩🔥💧💧",
    catchphrase: "Warm red center. Just enough heat to wake it up.",
  },
  juicy: {
    model: "openrouter/xiaomi/mimo-v2.5-pro",
    temp: "145°F",
    art: "🥩🔥🔥💧",
    catchphrase: "Prime time. Pink, tender, and dripping with MiMo intelligence.",
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

const TIPS = [
  "🔥 Make sure your pan is hot enough BEFORE you put the meat in. Sizzle on contact or you're steaming, not searing.",
  "🧂 Salt your steak 40 minutes before cooking. Or right before. Never in between — soggy city.",
  "🛑 Let it rest. 5 minutes for a thin cut, 10 for thick. Carryover cooking will finish the job.",
  "🧈 Butter baste at the end. Tilt the pan, spoon that gold over the top. You're welcome.",
  "🧈🧈 AFTER resting 5-10 minutes, drop a pat of compound butter on top. Let it melt into the cracks. Then slice. This is the way.",
  "🌡️ Use a thermometer. Your thumb trick is lying to you.",
  "🔪 Slice against the grain. Otherwise you're chewing steak-flavored rubber bands.",
  "🥩 Room temp meat sears better. Pull it out 30 mins before. Cold steak = sad crust.",
  "💨 Pat it dry. Water is the enemy of browning. Bone-dry surface = crispy heaven.",
  "🫒 High smoke point oil only. Canola, avocado, grapeseed. Olive oil will smoke out your kitchen.",
  "🧄 Garlic + thyme + butter = the holy trinity of basting. Crush the garlic, don't chop it.",
  "🍳 Cast iron is king. It holds heat like a grudge. Stainless is fine. Non-stick is for eggs.",
  "📏 Thick cuts only. 1.5 inches minimum. Anything thinner is a pancake with delusions of grandeur.",
  "🦴 Bone-in = more flavor, longer cook. Boneless = easier, faster. Both valid. Don't let anyone shame you.",
  "⏱️ Reverse sear for thick boys. Oven first at 275°F, then hot pan finish. Edge-to-edge pink perfection.",
  "🧊 NEVER freeze a cooked steak. You'll cry. Freeze raw, thaw in fridge overnight.",
  "🍷 If you wouldn't drink it, don't deglaze with it. Cheap wine = cheap sauce.",
  "👆 Poke test: rare feels like your cheek, medium like your chin, well done like your forehead. Or just use a thermometer.",
  "🧽 Clean your cast iron with salt and oil. Soap is not the enemy — modern soap is fine. The myth must die.",
  "🌿 Finish with flaky salt. Maldon, fleur de sel. Not table salt. You're not a monster.",
  "🤫 Stop flipping it. ONE flip. Maybe two if you're basting. Every flip costs you crust.",
  "🔥🔥 If your smoke alarm isn't considering going off, your pan isn't hot enough.",
  "🥗 Rest it on a rack, not a plate. Steam trapped underneath = soggy bottom. Nobody wants soggy bottom.",
  "🐄 Know your cow. Ribeye = fatty & forgiving. Filet = lean & tender. Strip = best of both. Flank = marinade or regret.",
  "🧪 Dry brine > wet brine. Salt overnight in the fridge. It's a transformative experience.",
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

    // Random fact or tip
    if (text === "fact" || text === "meat fact") {
      const fact = FACTS[Math.floor(Math.random() * FACTS.length)];
      pi.sendMessage({ customType: "steak-fact", content: `📖 **Meat Fact:** ${fact}`, display: true });
      return { action: "handled" };
    }

    if (text === "tip" || text === "chef tip") {
      const tip = TIPS[Math.floor(Math.random() * TIPS.length)];
      pi.sendMessage({ customType: "steak-tip", content: `👨‍🍳 **Chef Tip:** ${tip}`, display: true });
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
