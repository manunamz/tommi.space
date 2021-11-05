const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
const pluginSEO = require("eleventy-plugin-seo");
const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(UpgradeHelper);
  eleventyConfig.addPlugin(pluginSass, sassPluginOptions);
  eleventyConfig.addPlugin(pluginSEO, {
    title: "tommi.space",
    description: "A virtual representation of the mess inside Tommi’s mind",
    url: "https://tommi.space",
    author: "Tommi",
    image: "/images/preview.gif"
  });

  return {
    dir: {
      layouts: "_layouts"
    }
  }
};
