import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";
import { glob } from "fast-glob";

const products = defineCollection ({
    loader: glob({ 
        pattern: "**/*.md",
        base: "./src/articles/products" }),
    schema: z.object({
        title: z.string(),
        //permalink: z.string().optional(),
    }),
});

// Define tên của Products được export (hoặc blogs) ở đây
export const Products = { products };