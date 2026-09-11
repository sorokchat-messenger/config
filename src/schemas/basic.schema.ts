import z from "zod";
import { ModeSchema } from "./mode.schema.js";

export const BasicSchema = z
  .object({
    NODE_ENV: ModeSchema,
  })
  .transform(({ NODE_ENV }) => ({ mode: NODE_ENV }));

export type BasicConfig = z.infer<typeof BasicSchema>;
