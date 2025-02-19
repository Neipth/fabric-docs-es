import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentación de Fabric",
  description:
    "Documentación de Fabric, una de las herramientas de Modding para Minecraft.",

  // Remueve .html del final de las URL(s).
  cleanUrls: true,

  // Sobre todo por el favicon.
  head: [["link", { rel: "icon", sizes: "32x32", href: "/favicon.png" }]],

  // Añade un «Última actualización» al pie de las páginas, utiliza git para determinar la última vez que se modificó el archivo.
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>',
    },

    lastUpdated: { text: "Última actulización" },
    outline: { label: "En esta página" },
    docFooter: {
      prev: 'Anterior Página',
      next: 'Siguiente Página'
    }
  },
});
