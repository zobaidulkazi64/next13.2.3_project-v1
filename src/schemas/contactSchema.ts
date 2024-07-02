// schemas/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  company: z.string(),
  message: z.string(),
});
