import type z from "zod";

export function validate<T extends z.ZodType>(
  data: unknown,
  schema: T,
): z.infer<T> {
  const result = schema.safeParse(data);
  if (result.success) return result.data;
  const errors = result.error.issues.map((issue) => issue.message).join(", ");
  throw new Error(errors);
}
