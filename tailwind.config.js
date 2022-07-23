const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            primary: 'white',
            secondary: 'rgb(163 163 163)',
            thirdary: '#F0F0F0',
            fourthdary: 'rgb(115 115 115)',
            fifthdary: 'rgb(0 0 128)',
            sixthdary: 'rgb(241 245 249)',
        }
    },

    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
