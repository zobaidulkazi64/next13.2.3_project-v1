import { z } from "zod";

export const imageSchema = z.object({
  filename: z.string().min(1),
    path: z.string().min(1),
    originalName: z.string().min(1),
    mimetype: z.string().min(1),
    size: z.number().min(1),
});

export type Image = z.infer<typeof imageSchema>;

export default imageSchema;
