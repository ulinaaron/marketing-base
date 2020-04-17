
let mix = require('laravel-mix')
let tailwindcss = require('tailwindcss')
require('laravel-mix-purgecss')
require('laravel-mix-criticalcss');

// Paths
const paths = {
    sass: {
        source: './src/assets/sass/main.scss',
        dest: 'static/css/'
    },
    javascript: {
        source: './src/assets/js/main.js',
        singles: './src/assets/js/singles/*',
        dest: 'static/js/'
    }
}

// Run mix
mix

    .webpackConfig({
        resolve: {
            alias: {
                '@utilities': path.resolve(__dirname, 'src/assets/js/utilities'),
                '@modules': path.resolve(__dirname, 'src/assets/js/modules')
            }
        }
    })

    .copy('tailwind.config.js', 'src/_globals/tokens.js')
    
    // Concatenate & Compile Javascript
    .js(paths.javascript.source, paths.javascript.dest)

    // Compile singles
    // .js(paths.javascript.singles, paths.javascript.dest)

    // Compile SCSS & TailwindCSS
    .sass(paths.sass.source, paths.sass.dest)
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')]
    })
    .criticalCss({
        enabled: mix.inProduction(),
        paths: {
            base: 'https://aaronmazade.netlify.app/',
            templates: './critical/',
            suffix: '_critical.min'
        },
        urls: [
            { url: 'https://aaronmazade.netlify.app/', template: 'index' },
            { url: 'https://aaronmazade.netlify.app/articles', template: 'articles' },
        ],
        options: {
            minify: true,
        },
    })

    // Production only
    if ( mix.inProduction() )
    {

        // Remove any unused CSS using Purge
        mix

            .purgeCss({
                folders: [
                    'src'
                ],
                extensions: [
                    'html',
                    'njk'
                ],
                whitelist: [
                    'body',
                    'html',
                    'a',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'p',
                    'blockquote',
                    'breadcrumbs',
                    'content',
                    'form',
                    'input',
                    'textarea',
                    'intro',
                    'btn',
                    'loaded',
                    'page-title',
                    'required',
                    'row',
                    'visually-hidden',
                    'menu-visible'
                ]
            })

            // Minifies CSS & JS files
            .minify(paths.sass.dest + 'main.css')
            .minify(paths.javascript.dest + 'main.js')

    }