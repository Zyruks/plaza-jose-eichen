import { z, defineCollection } from "astro:content"

const storeSchema = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    subTitle: z.string(),
    description: z.string(),
    logo: z.string(),
    image: z.string(),
    url: z.string(),
    hours: z.string(),
    phone: z.string(),
    address: z.string(),
    social: z.object({
      facebook: z.string(),
      instagram: z.string(),
      twitter: z.string(),
    }),
  }),
})

export const collections = {
  stores: storeSchema,
}
