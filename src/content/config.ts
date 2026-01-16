import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    stack: z.string(),
    github: z.string().url(),
    order: z.number(),
  }),
});

const resumeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    updated: z.date(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const homeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    lead: z.string(),
    now: z.array(z.string()),
    tiles: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
      })
    ),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  resume: resumeCollection,
  about: aboutCollection,
  home: homeCollection,
};
