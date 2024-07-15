import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "src/.vuepress/public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src/.vuepress/public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
            ui: {
              dateFormat: "YYYY-MM-DD"
            }
          },
          {
            type: "string",
            name: "category",
            label: "category",
            list: true
          },
          {
            type: "string",
            name: "tag",
            label: "tag",
            list: true
          },
          {
            type: 'boolean',
            name: 'star',
            label: 'star'
          },
          {
            type: 'boolean',
            name: 'sticky',
            label: 'sticky'
          },
          {
            type: "string",
            name: "icon",
            label: "icon",
          },
          {
            type: 'image',
            label: 'cover',
            name: 'cover',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
