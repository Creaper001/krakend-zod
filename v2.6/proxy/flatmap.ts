import { z } from "zod";

export const flatmap = z.object({
  type: z.enum(["move", "del", "append"]),
  args: z.string().array(),
});
