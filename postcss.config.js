const tailwindCss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindCss('./tailwind.config.js'), // require tailwind config file
        require('autoprefixer'), // import AutoPreFixer

        // require('@fullhuman/postcss-purgecss')({
        //     content: [
        //         './apps/colordesq/src/**/*.{js,ts,jsx,tsx}',
        //         './libs/ui-kit/src/**/*.{js,ts,jsx,tsx}',
        //         './libs/ui-menu/src/**/*.{js,ts,jsx,tsx}',
        //         './libs/ui-panel/src/**/*.{js,ts,jsx,tsx}'
        //     ],
        //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        // })
    ]
}