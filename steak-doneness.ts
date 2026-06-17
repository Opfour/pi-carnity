import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const DONENESS: Record<string, string> = {
  rare: "deepseek/deepseek-chat",
  medium: "openrouter/deepseek/deepseek-v4-pro",
  "well done": "openrouter/anthropic/claude-sonnet-4-20250514",
};

export default function (pi: ExtensionAPI) {
  pi.on("input", async (event, ctx) => {
    const text = event.text.toLowerCase().trim();

    const model = DONENESS[text];
    if (!model) return { action: "continue" };

    pi.sendUserMessage(`/model ${model}`, { deliverAs: "followUp" });
    ctx.ui.notify(`🔥 ${text.toUpperCase()} → ${model.split("/").pop()}`, "info");
    return { action: "handled" };
  });
}
