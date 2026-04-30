import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const slideCollection = defineCollection(
	{
		loader: glob({base: './src/assets/banner/', pattern: '*.md'}),
		schema: z.object({
			title: z.string(),
		}),
	}
);
export const collections = { slideCollection };

