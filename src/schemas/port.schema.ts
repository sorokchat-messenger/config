import z from "zod";

const MIN_PORT: number = 1;
const MAX_PORT: number = 65535;

export const PortSchema = z.coerce
  .number({ error: "Порт має бути числом" })
  .int({ error: "Порт має бути цілим числом" })
  .min(MIN_PORT, { error: `Порт має бути не менше ніж ${MIN_PORT}` })
  .max(MAX_PORT, { error: `Порт має бути не більше ніж ${MAX_PORT}` });
