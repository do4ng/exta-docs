export type Post = Record<string, string>;

export interface Category {
  name: string;
  posts: Post[];
  hidden?: boolean;
}

export interface Config {
  title: string;
  icon?: string;
  category: Category[];
  directory?: string;
  target: string;
}

export default [
  {
    title: "docs",
    icon: "book-open-line",
    target: "overview",
    category: [
      {
        name: "Overview",
        posts: [{ "why-exta": "Why Exta" }],
      },
      {
        name: "Getting Started",
        posts: [
          { installation: "Installation" },
          { routing: "Routing" },
          { "layout-404": "Layout and Error" },
          { "static-props": "Static Props" },
          { navigating: "Navigating" },
          { styling: "Styling" },
          { "build-app": "Build" },
          { deploy: "Deploy" },
          { sitemap: "Sitemap" },
        ],
      },
      {
        name: "Components",
        posts: [
          { image: "<Image />" },
          { link: "<Link />" },
          { head: "<Head />" },
        ],
      },
      {
        name: "Community",
        hidden: true,
        posts: [{ community: "Community" }, { contributing: "Contributing" }],
      },
    ],
  },
  {
    title: "changelog",
    target: "changelog",

    category: [
      {
        name: "Overview",
        posts: [{ changelog: "Changelog" }],
      },
      {
        name: "Changelogs",
        posts: [{ "0-0-1-beta-20": "v0.0.1-beta.20" }],
      },
    ],
  },
] as Config[];
