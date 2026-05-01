import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// Zod Schema for Internship Listing
export const InternshipResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  company: z.object({
    name: z.string(),
    logo: z.string().url(),
  }),
  location: z.string(),
  category: z.string(),
  duration: z.number().min(1).max(12),
  isPaid: z.boolean(),
  createdAt: z.date(),
});

// Zod Schema for Filter Query (Enterprise Enhanced)
export const InternshipQuerySchema = z.object({
  category: z.string().optional(),
  isPaid: z.coerce.boolean().optional(),
  countryId: z.coerce.number().optional(),
  minSalary: z.coerce.number().optional(),
  limit: z.coerce.number().default(10),
  offset: z.coerce.number().default(0),
});

export class CreateInternshipDto extends createZodDto(InternshipResponseSchema.omit({ id: true, createdAt: true })) {}
export class InternshipQueryDto extends createZodDto(InternshipQuerySchema) {}
