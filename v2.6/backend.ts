import { z } from "zod";
import { backend_extra_config } from "./backend_extra_config";

export const backend = z.object({
  url_pattern: z.string(),
  encoding: z
    .enum(["json", "safejson", "fast-json", "xml", "rss", "string", "no-op"])
    .default("json"),
  sd: z.enum(["static", "dns"]).default("static"),
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).default("GET"),
  extra_config: backend_extra_config,
  disable_host_sanitize: z.boolean().default(false),
  host: z.string().array(),
  target: z.string().nullish(),
  deny: z.string().array(),
  allow: z.string().array(),
  group: z.string().default("backend1"),
  mapping: z.record(z.string(), z.string()),
  is_collection: z.boolean().default(true),
});
