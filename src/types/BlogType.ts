import { z } from "zod";

export const BlogSchema = z.object({
  bId: z.number().optional(),
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  subtitle: z
    .string()
    .min(1, "Subtitle is required")
    .max(100, "Subtitle is too long"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(10000, "Description is too long"),
  code: z.string().min(1, "Code is required").max(1000, "Code is too long"),
  image: z.string().optional(),
  url: z.string().optional(),
  tags: z
    .array(z.string())
    .min(1, "Tags are required")
    .max(10, "Too many tags"),
});

export type BlogType = z.infer<typeof BlogSchema>;
