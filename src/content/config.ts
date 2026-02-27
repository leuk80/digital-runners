import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['de', 'en']),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Digital Runners'),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
