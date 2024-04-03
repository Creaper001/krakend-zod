import { z } from "zod";
import { martian } from "./modifier/martian";

export const backend_extra_config = z.object({
  "modifier/martian": martian,
});
