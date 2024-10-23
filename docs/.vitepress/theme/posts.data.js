import { createContentLoader } from "vitepress";

export default createContentLoader("content/**/*.md", {
  includeSrc: true,
  render: true,
  excerpt: true,
});
