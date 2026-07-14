export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "node_modules/@picocss/pico/css/pico.min.css": "css/pico.min.css",
  });
}

export const config = {
  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
  },
};
