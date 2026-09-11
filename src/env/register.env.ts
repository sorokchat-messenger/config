import type z from "zod";
import { validate } from "../utils/index.js";
import {
  registerAs,
  type ConfigFactory,
  type ConfigObject,
} from "@nestjs/config";

export function registerEnv<T extends z.ZodType<ConfigObject>>(
  namespace: string,
  schema: T,
  data: unknown,
): ConfigFactory<z.output<T>> {
  const parsed = validate(data, schema);
  return registerAs(namespace, () => parsed);
}
