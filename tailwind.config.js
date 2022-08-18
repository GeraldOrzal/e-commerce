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
                category0:'url("/resources/js/images/clothes.jpg")',
                category1:'url("/resources/js/images/furnitures.jpeg")',
                category2:'url("/resources/js/images/foods.jpg")',
                category3:'url("/resources/js/images/technology.webp")',
                category4:'url("/resources/js/images/hygiene.jpeg")',
                category5:'url("/resources/js/images/medicines.webp")',
                sample:'url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80")',
                ads:'url("/resources/js/images/ads.png")',
                f21:'url("/resources/js/images/forever-21.png")',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            }
        },
        colors: {
            primary: '#ffffff',
            secondary: '#0B237A',
            tertiary: '#444EA3',
            disable: '#7D7D7D',
            error: '#991B1E',
            black: '#121212'
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
