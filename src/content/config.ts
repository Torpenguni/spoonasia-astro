import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    category: z.enum([
      'unit-economics',
      'neighborhood-alpha',
      'market-entry',
      'supplier-intel',
      'markets',
      'operators',
      'suppliers',
      'investment',
      'neighborhood',
    ]),
    tag: z.string(),
    author: z.string().default('SpoonAsia Desk'),
    date: z.coerce.date(),
    readTime: z.string(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { articles };
