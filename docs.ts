export interface Docs {
  name: string;
  description: string;

  github: string;

  index: {
    content: string;
    href: string;
  }[];

  header: Array<
    | {
        type: "popover";
        title: string;
        children: Array<{
          title: string;
          href: string;
          icon: string;
          description?: string;
        }>;
      }
    | { title: string; href: string; type: "link" }
  >;
}

export default {
  name: "Exta",
  description: 'The React <br/><span class="gra ">SSG Framework</span> <br/>',
  index: [
    {
      content: "Getting Started",
      href: "/docs/installation",
    },
    {
      content: "Why Exta?",
      href: "/docs/why-exta",
    },
  ],
  header: [
    {
      title: "Docs",
      type: "popover",
      children: [
        {
          title: "Docs",
          href: "/docs/why-exta",
          description: "Learn all of information of package.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-book-open-line",
        },

        {
          title: "Contribute",
          href: "/docs/contributing",
          description: "thank you for your contribution.",
          // https://remixicon.com/icon/book-open-line
          icon: "ri-sticky-note-line",
        },
      ],
    },
    {
      title: "Changelog",
      type: "link",
      href: "/changelog/changelog",
    },
  ],
} as Docs;
