import katex from "katex";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "node_modules/@picocss/pico/css/pico.min.css": "css/pico.min.css",
    "node_modules/katex/dist/katex.min.css": "css/katex.min.css",
    "node_modules/katex/dist/fonts/": "css/fonts/",
  });

  // from https://ben.page/eleventy-katex
  eleventyConfig.addFilter("latex", (content) => {
    return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
      const cleanEquation = equation
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");

      return katex.renderToString(cleanEquation, { throwOnError: false });
    });
  });
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};
