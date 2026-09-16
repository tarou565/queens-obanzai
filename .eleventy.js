export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets":"assets"});
  eleventyConfig.addPassthroughCopy({"src/styles.css":"styles.css"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt":"robots.txt"});
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const d = new Date(dateObj);
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,"0");
    const day = String(d.getDate()).padStart(2,"0");
    return `${y}.${m}.${day}`;
  });
  eleventyConfig.addCollection("posts", collection =>
    collection.getFilteredByGlob("src/posts/*.md").sort((a,b)=>b.date-a.date)
  );
  return {dir:{input:"src",output:"_site",includes:"_includes",data:"_data"},
    markdownTemplateEngine:"njk",htmlTemplateEngine:"njk"};
}
