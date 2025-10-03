import { defineConfig } from "vitepress";

export default defineConfig({
  title: "react-clipboard-lite",
  description: "Tiny React clipboard utilities",
  lang: "en-US",
  base: "/clipboard-monorepo/",
  ignoreDeadLinks: [
    // Ignore storybook links as they are generated after docs build
    /^\/storybook\//,
    // Ignore links to root README files (outside docs directory)
    /\.\.\/README/,
    /\.\.\/\.\.\/README/,
    // Ignore relative links to other docs
    /\.\/docs\//,
    /\.\/\.\.\/docs\//,
  ],
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: process.env.DOCSEARCH_APP_ID || "YOUR_APP_ID",
        apiKey: process.env.DOCSEARCH_API_KEY || "YOUR_SEARCH_API_KEY",
        indexName: process.env.DOCSEARCH_INDEX || "YOUR_INDEX_NAME",
      },
    },
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "API", link: "/api" },
      { text: "Storybook", link: "/storybook/" },
    ],
    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Guide", link: "/guide" },
          { text: "API", link: "/api" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/suchuhong/clipboard-monorepo" }],
  },
});
