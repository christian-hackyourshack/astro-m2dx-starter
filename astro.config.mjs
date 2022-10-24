import { defineConfig } from "astro/config";

import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  // activate any required feature here
  componentDirectives: true,
  exportComponents: true,
  relativeImages: true,
  scanTitle: true,
  scanAbstract: true,
  styleDirectives: true,
};

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx({
      remarkPlugins: [[m2dx, m2dxOptions]],
      extendDefaultPlugins: true,
    }),
  ],
});
