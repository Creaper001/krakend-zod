import { z } from "zod";

export enum Scope {
  Request,
  Response,
}

export const martian = z.object({
  "body.Modifier": z.object({
    scope: z.nativeEnum(Scope),
    body: z.string(),
  }),
  "cookie.Modifier": z.object({
    scope: z.nativeEnum(Scope),
    name: z.string(),
    value: z.string(),
    path: z.string(),
    domain: z.string(),
    expires: z.string(),
    secure: z.boolean().default(false),
    httpOnly: z.boolean().default(false),
    maxAge: z.number().default(0),
  }),
});
