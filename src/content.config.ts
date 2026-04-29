import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { Tags } from '@lucide/astro';

/*
const slide = defineCollection({
    loader: glob({ pattern: "**.png", base: "./src/assets/slide"}),
    schema: z.object({

    }),
});
*/
const blogCollection = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/articles/products/', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			date: z.coerce.date(),
			//image: image().optional(),
			catergory: z.string(),
			parent: z.string(),
			tags: z.string().array(),
		}),
});

/*
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**//*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Transform string to Date object
			date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
		}),
});
*/
export const collections = { blogCollection };

