import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client =  createClient({
    projectId : 'h9wrwxle',
    dataset : 'production',
    apiversion : '2023-06-31',
    useCdn : true,
    token : process.env.SANITY_API_TOKEN
 })

 const builder = imageUrlBuilder(client)

 export const urlFor = (source) => builder.image(source);