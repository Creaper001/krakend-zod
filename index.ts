import type { ZodTypeAny, input } from "zod";
import type { BunFile } from "bun";

export const krakendZod =
  <T extends ZodTypeAny>(schema: T) =>
  (data: input<T>) =>
  (destination: BunFile | Bun.PathLike = "krakend.json") =>
    Bun.write(destination, JSON.stringify(schema.parse(data)));

export default krakendZod;
