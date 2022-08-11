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
        screens: {
            'xs': '200px',
            // => @media (min-width: 200px) { ... }

            'sm': '481px',
            // => @media (min-width: 481px) { ... }
        
            'md': '769px',
            // => @media (min-width: 769px) { ... }
        
            'lg': '1025px',
            // => @media (min-width: 1025px) { ... }
        
            'xl': '1281px',
            // => @media (min-width: 1281px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            }
        },
        colors: {
            primary: '#ffffff',
            secondary: 'rgb(163 163 163)',
            thirdary: '#f0f0f0',
            fourthdary: 'rgb(115 115 115)',
            fifthdary: 'rgb(0 0 128)',
            sixthdary: 'rgb(241 245 249)',
            danger: '#ff0000',
            neutral1: '#2f2d8e',
            neutral2: '#9c1b1f',
            neutral3: '#999999',
            neutral4: '#f0f0f0',
            colorscheme1: '#0B237A',
            colorscheme2: '#444EA3',
            colorscheme3: '#991B1E'
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
