import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { exta } from "exta";
import { writeFileSync } from "fs";
import path from "path";

import config from "./config";

export default defineConfig({
  plugins: [
    react(),
    exta(),
    {
      name: "sitemap",
      apply: "build",
      buildEnd() {
        const baseUrl = "https://extajs.netlify.app";
        const sitemap: string[] = [];

        sitemap.push('<?xml version="1.0" encoding="UTF-8"?>');
        sitemap.push(
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        );

        for (const conf of config) {
          const { title, category } = conf;

          for (const cat of category) {
            for (const post of cat.posts) {
              const [slug] = Object.keys(post);
              const url = `${baseUrl}/${title}/${slug}`;
              sitemap.push(`  <url>`);
              sitemap.push(`    <loc>${url}</loc>`);
              sitemap.push(`  </url>`);
            }
          }
        }

        sitemap.push("</urlset>");

        writeFileSync(
          path.resolve("./dist/sitemap.xml"),
          sitemap.join("\n"),
          "utf-8"
        );
      },
    },
  ],
});
