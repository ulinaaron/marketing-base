const htmlmin = require("html-minifier")

module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))

    // Minify our HTML
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if ( outputPath.endsWith(".html") )
        {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minified
        }
        return content
    })

    // Collections
    eleventyConfig.addCollection('article', collection => {

        const articles = collection.getFilteredByTag('article')

        for( let i = 0; i < articles.length; i++ ) {

            const prevPost = articles[i - 1]
            const nextPost = articles[i + 1]

            articles[i].data["prevPost"] = prevPost
            articles[i].data["nextPost"] = nextPost

        }

        return articles.reverse()

    })

    eleventyConfig.addCollection('work', collection => {

        const works = collection.getFilteredByTag('work')

        for( let i = 0; i < works.length; i++ ) {

            const prevPost = works[i - 1]
            const nextPost = works[i + 1]

            works[i].data["prevPost"] = prevPost
            works[i].data["nextPost"] = nextPost

        }

        return works.reverse()

    })

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy("static/css")
    eleventyConfig.addPassthroughCopy("static/js")
    eleventyConfig.addPassthroughCopy("static/images")
    eleventyConfig.addPassthroughCopy("static/robots.txt")
    eleventyConfig.addPassthroughCopy("static/estimate.json")
    eleventyConfig.addPassthroughCopy("static/_redirects")

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_globals'
        }
    }

}
