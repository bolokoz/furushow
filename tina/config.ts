import { defineConfig, Form, TinaCMS } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
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
        ui: {
          // Example of beforeSubmit
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
          }) => {
            if (form.crudType === 'create') {
              return {
                ...values,
                createdAt: new Date().toISOString(),
                slug: values.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, ''),
              }
            } else return {
              ...values,
              lastUpdated: new Date().toISOString(),
            }
          },
        },
        name: "post",
        label: "Posts",
        path: "src/posts",
        match:{
          exclude: 'foodrating/**/**'
        },
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
            type: "string",
            name: "slug",
            label: "slug",
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "datetime",
            name: "createdAt",
            label: "createdAt",
          },
          {
            type: "datetime",
            name: "lastUpdated",
            label: "lastUpdated",
          },
          {
            type: "string",
            name: "category",
            label: "category",
            list: true,
          },
          {
            type: "string",
            name: "tag",
            label: "tag",
            list: true,
          },
          {
            type: "boolean",
            name: "star",
            label: "star",
          },
          {
            type: "boolean",
            name: "sticky",
            label: "sticky",
          },
          {
            type: "string",
            name: "icon",
            label: "icon",
          },
          {
            type: "image",
            label: "cover",
            name: "cover",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        
      },
      {
        name: "parmegianas",
        label: "Parmegianas",
        path: "src/posts/foodrating/parmegianologo",
        defaultItem: () => {
          return {
            // Return a default title and the current date as the default date
            description: 'Review da Parmegiana',
            category: 'Food Rating',
            tag: "Parmegiana",
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Restaurante",
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
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "string",
            name: "category",
            label: "category",
            list: true,
            options: [
              {
                value: "Food Rating",
                label: "Food Rating"
              }
            ]
          },
          {
            type: "string",
            name: "tag",
            label: "tag",
            list: true,
            options: [
              {
                value: "Parmegiana",
                label: "Parmegiana"
              }
            ]
          },
          {
            type: "string",
            name: "acompanhamentos",
            label: "Acompanhamentos",
            list: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Nota sentimental 1 a 5",
          },
          {
            type: "number",
            name: "price",
            label: "Valor pago",
          },
          {
            type: "number",
            name: "porcao",
            label: "Serve quantas pessoas",
          },
          {
            type: "image",
            label: "cover",
            name: "cover",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "vinhos",
        label: "Vinhos",
        path: "src/posts/foodrating/vinhos",
        defaultItem: () => {
          return {
            // Return a default title and the current date as the default date
            description: 'Review do Vinho',
            category: 'Food Rating',
            tag: "Vinhos",
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Nome do vinho",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "pais",
            label: "Pais de origem do vinho",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "uva",
            label: "Nome da uva",
          },
          {
            type: "datetime",
            name: "date",
            label: "dia da experiencia",
            ui: {
              dateFormat: "YYYY-MM-DD",
            },
          },
          {
            type: "string",
            name: "category",
            label: "category",
            list: true,
            options: [
              {
                value: "Food Rating",
                label: "Food Rating"
              }
            ]
          },
          {
            type: "string",
            name: "tag",
            label: "tag",
            list: true,
            options: [
              {
                value: "Vinhos",
                label: "Vinhos"
              }
            ]
          },
          {
            type: "number",
            name: "rating",
            label: "Nota sentimental 1 a 5",
          },
          {
            type: "number",
            name: "price",
            label: "Valor pago",
          },
          {
            type: "string",
            name: "local",
            label: "Local onde foi comprado",
          },
          {
            type: "number",
            name: "ano",
            label: "Ano",
          },
          {
            type: "image",
            label: "cover",
            name: "cover",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // {
      //   name: "FoodReview",
      //   label: "Food review",
      //   path: "src/posts/foodrating",
      //   defaultItem: () => {
      //     return {
      //       // When a new post is created the title field will be set to "New post"
      //       category: "Food Rating",
      //     };
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Nome do prato",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "string",
      //       name: "restaurante",
      //       label: "restaurante",
      //     },
      //     {
      //       type: "datetime",
      //       name: "date",
      //       label: "dia da experiencia",
      //       ui: {
      //         dateFormat: "YYYY-MM-DD",
      //       },
      //     },
      //     {
      //       type: "string",
      //       name: "category",
      //       label: "category",
      //       list: true,
      //     },
      //     {
      //       type: "string",
      //       name: "tag",
      //       label: "tag",
      //       list: true,
      //     },
      //     {
      //       type: "number",
      //       name: "rating",
      //       label: "Nota sentimental 1 a 5",
      //     },
      //     {
      //       type: "number",
      //       name: "price",
      //       label: "Valor pago",
      //     },
      //     {
      //       type: "image",
      //       label: "cover",
      //       name: "cover",
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body",
      //       isBody: true,
      //     },
      //   ],
      // },
    ],
  },
});
