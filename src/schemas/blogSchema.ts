import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3).max(100),
  desc: z.string().min(3).max(1500),
  img: z.string().url().default(""),
  href: z.string().url().default(""),
});

export type BlogType = z.infer<typeof blogSchema>;
