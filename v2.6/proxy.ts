import { z } from "zod";
import { flatmap } from "./proxy/flatmap";

export const proxy = z.object({
  shadow: z.boolean().default(true),
  flatmap_filter: flatmap.array(),
});
