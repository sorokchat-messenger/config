import z from "zod";
import { HostSchema } from "./host.schema.js";
import { PortSchema } from "./port.schema.js";

export const GrpcConnectionSchema = z
  .object({
    GRPC_HOST: HostSchema,
    GRPC_PORT: PortSchema,
  })
  .transform(({ GRPC_HOST, GRPC_PORT }) => ({
    host: GRPC_HOST,
    port: GRPC_PORT,
  }));

export type GrpcConnectionConfig = z.infer<typeof GrpcConnectionSchema>;
