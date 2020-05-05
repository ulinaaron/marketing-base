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

    eleventyConfig.addCollection('master', collection => {

        const masters = collection.getFilteredByTag('master')

        for( let i = 0; i < masters.length; i++ ) {

            const prevPost = masters[i - 1]
            const nextPost = masters[i + 1]

            masters[i].data["prevPost"] = prevPost
            masters[i].data["nextPost"] = nextPost

        }

        return masters.reverse()

    })

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', '../layouts/default.njk')
    eleventyConfig.addLayoutAlias('post', '../layouts/post.njk')
    eleventyConfig.addLayoutAlias('page', '../layouts/page.njk')
    eleventyConfig.addLayoutAlias('master', '../layouts/master.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy("static/css")
    eleventyConfig.addPassthroughCopy("static/fonts")
    eleventyConfig.addPassthroughCopy("static/js")
    eleventyConfig.addPassthroughCopy("static/images")
    eleventyConfig.addPassthroughCopy("static/robots.txt")
    eleventyConfig.addPassthroughCopy("static/_redirects")

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: './content',
            output: './dist',
            includes: '../includes',
            layouts: '../layouts',
            data: '../data'
        }
    }

}
