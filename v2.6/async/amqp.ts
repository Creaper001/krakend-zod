import { z } from "zod";

export const amqp = z.object({
  host: z.string(),
  name: z.string(),
  exchange: z.string(),
  durable: z.boolean().default(false),
  delete: z.boolean().default(false),
  exclusive: z.boolean().default(false),
  no_wait: z.boolean().nullish(),
  no_local: z.boolean().nullish(),
  prefetch_count: z.number().default(10),
  prefetch_size: z.number().default(0),
  auto_ack: z.boolean().default(false),
});
