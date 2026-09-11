import z from "zod";

export const HostSchema = z
  .string({ error: "Хост має бути рядком" })
  .nonempty({ error: "Хост не може бути порожнім" })
  .nonoptional({ error: "Хост має бути" });
