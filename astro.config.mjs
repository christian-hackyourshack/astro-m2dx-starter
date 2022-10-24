import { defineConfig } from "astro/config";

import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import directives from "remark-directive";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  // activate any required feature here
  // addOns: [],
  // autoImports: true,
  // autoImportsFailUnresolved: true,
  componentDirectives: true,
  // exportComponents: true,
  frontmatter: true,
  // includeDirective: true,
  // mdast: true,
  // rawmdx: true,
  relativeImages: true,
  // scanAbstract: true,
  scanTitle: true,
  styleDirectives: true,
};

export default defineConfig({
  integrations: [
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    mdx({
      remarkPlugins: [directives, [m2dx, m2dxOptions]],
      extendDefaultPlugins: true,
    }),
  ],
});
