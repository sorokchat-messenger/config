import z from "zod";

const modes = ["development", "production"] as const;

export const ModeSchema = z.enum(modes, {
  error: `Режим роботи має одне із цих значень: [${modes.map((mode) => `"${mode}"`).join(", ")}]`,
});
