import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins/remark-mdx-mermaid";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid, remarkMath],
    // rehype-katex must run before rehype-code (Shiki) so math nodes
    // are rendered before Shiki tries to highlight them
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
