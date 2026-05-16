import { defineConfig } from 'tinacms';

// Tina Cloud credentials — set via env vars in Railway (or .env locally)
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || '',  // get from app.tina.io
  token: process.env.TINA_TOKEN || '',                // get from app.tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'article',
        label: 'Articles',
        path: 'src/content/articles',
        format: 'md',
        ui: {
          filename: {
            // Auto-generate from title → kebab-case slug
            slugify: (values) =>
              (values?.title || 'untitled')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, ''),
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'dek',
            label: 'Dek / Subhead',
            required: true,
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: [
              { value: 'unit-economics',     label: 'Unit Economics' },
              { value: 'neighborhood-alpha', label: 'Neighborhood Alpha' },
              { value: 'market-entry',       label: 'Market Entry' },
              { value: 'supplier-intel',     label: 'Supplier Intel' },
              { value: 'markets',            label: 'Markets' },
              { value: 'operators',          label: 'Operators' },
              { value: 'suppliers',          label: 'Suppliers' },
              { value: 'investment',         label: 'Investment' },
              { value: 'neighborhood',       label: 'Neighborhood' },
            ],
          },
          {
            type: 'string',
            name: 'tag',
            label: 'Tag (display label)',
            required: true,
            description: 'Short label shown above the headline, e.g. "Unit Economics"',
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish date',
            required: true,
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read time',
            required: true,
            description: 'e.g. "12 min read"',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Hero image',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft (hide from site)',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
