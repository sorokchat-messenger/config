import { BasicSchema, type BasicConfig } from "../schemas/index.js";
import { registerEnv } from "./register.env.js";

export function getBasicEnv(data: unknown) {
  return registerEnv("basic", BasicSchema, data);
}
