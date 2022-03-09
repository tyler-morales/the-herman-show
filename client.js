import sanityClient from '@sanity/client'

import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // or the name you chose in step 1
  apiVersion: '2021-08-31', // When you publish you can update this to the latest API version for better performance
  useCdn: true, // `false` if you want to ensure fresh data
})
