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
            'xs': '0px',
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
            backgroundImage:{
                category1:'url("/resources/js/images/w-apparel.png")',
                category2:'url("/resources/js/images/m-apparel.png")',
                category3:'url("/resources/js/images/Rectangle 385.png")',
                category4:'url("/resources/js/images/Rectangle 386.png")',
                category5:'url("/resources/js/images/Rectangle 387.png")',
                category6:'url("/resources/js/images/Rectangle 388.png")',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            primary: '#ffffff',
            secondary: 'rgb(163 163 163)',
            thirdary: '#f0f0f0',
            fourthdary: 'rgb(115 115 115)',
            fifthdary: 'rgb(0 0 128)',
            sixthdary: 'rgb(241 245 249)',
            danger: '#ff0000',
            transparent: 'transparent',
            neutral1: '#2f2d8e',
            neutral2: '#9c1b1f',
            neutral3: '#999999',
            neutral4: '#f0f0f0',
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
