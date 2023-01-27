import { createClient } from "contentful";

export const client = createClient({
    space: process.env.CONTENTFUL_ID!,
    accessToken: process.env.CONTENTFUL_TOKEN!
})