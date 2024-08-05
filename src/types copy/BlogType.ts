import { z } from "zod";

export const BlogSchema = z.object({
  bId: z.number().optional(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  code: z.string(),
  image: z.string().optional(),
  url: z.string().optional(),
  tags: z.array(z.string()),
});

export type BlogType = z.infer<typeof BlogSchema>;
