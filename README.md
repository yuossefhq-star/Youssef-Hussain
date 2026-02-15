
# Neon Bites - Production Ready Setup

This project is a high-fidelity implementation of the Neon Bites concept using React, Tailwind CSS, and a Sanity-ready service layer.

## Tech Stack
- **Next.js 14+** (Logic structure implemented in this SPA)
- **Tailwind CSS** (Custom Neon Configuration)
- **Sanity.io** (Headless CMS for Menu Management)
- **Lucide/Material Icons**

## Sanity Schema Configuration
To enable the dynamic dashboard as requested, create a `menuItem.js` schema in your Sanity Studio:

```javascript
export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured (Crowd Favorite)',
      type: 'boolean',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ]
}
```

## Environment Variables
Set these in your `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

## Deployment
This project is Vercel compatible. Simply link your repository and ensure your Sanity Environment Variables are added.
