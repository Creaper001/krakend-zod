import { z } from "zod";

export const grpc = z.object({
  catalog: z.string().array(),
});
