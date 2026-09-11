import { GrpcConnectionSchema } from "../schemas/index.js";
import { registerEnv } from "./register.env.js";

export function getGrpcEnv(data: unknown) {
  return registerEnv("grpc", GrpcConnectionSchema, data);
}
