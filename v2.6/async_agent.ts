import { z } from "zod";
import { backend } from "./backend";
import { amqp } from "./async/amqp";

export const async_agent = z.object({
  name: z.string(),
  encoding: z
    .enum(["json", "safejson", "xml", "rss", "string", "no-op"])
    .default("json"),
  connection: z.object({
    max_retries: z.number().default(0),
    health_interval: z.string().default("1s"),
    backoff_strategy: z
      .enum([
        "linear",
        "linear-jitter",
        "exponential",
        "exponential-jitter",
        "fallback",
      ])
      .default("fallback"),
  }),
  consumer: z.object({
    timeout: z.string(),
    topic: z.string(),
    workers: z.number().default(1),
    max_rate: z.number().default(0),
  }),
  backend: backend,
  extra_config: z.object({
    "async/amqp": amqp,
  }),
});
