import { z, defineCollection } from "astro:content";

const serviceSchema = z.object({
  title: z.string(),
  summary: z.string(),
  excerpt: z.string(),
  tags: z.array(z.string()),
  price: z.string().optional(),
  duration: z.string().optional(),
  category: z.enum(["maintenance", "repair"]),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  image: z.string().optional(),
});

const vehicleSchema = z.object({
  make: z.string(),
  models: z.array(z.string()),
  image: z.string().optional(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

const reviewSchema = z.object({
  author: z.string(),
  rating: z.number().min(1).max(5),
  date: z.string(),
  text: z.string(),
  vehicle: z.string().optional(),
  featured: z.boolean().optional(),
});

const locationSchema = z.object({
  name: z.string(),
  slug: z.string().optional(),
  address: z.string(),
  coordinates: z.object({ lat: z.number(), lng: z.number() }),
  description: z.string().optional(),
});

export const collections = {
  services: defineCollection({ type: "content", schema: serviceSchema }),
  vehicles: defineCollection({ type: "content", schema: vehicleSchema }),
  reviews: defineCollection({ type: "content", schema: reviewSchema }),
  locations: defineCollection({ type: "content", schema: locationSchema }),
};
