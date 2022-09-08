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
                category0:'url("./public/images/clothes.jpg")',
                category1:'url("./public/images/furnitures.jpeg")',
                category2:'url("./public/images/foods.jpg")',
                category3:'url("./public/images/technology.webp")',
                category4:'url("./public/images/hygiene.jpeg")',
                category5:'url("./public/images/medicines.webp")',
                sample:'url("https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80")',
                ads:'url("./public/images/ads.png")',
                f21:'url("./public/images/forever-21.png")',
            },
            fontFamily: {
                sans: ['Libre Baskerville',  ...defaultTheme.fontFamily.sans],
            }
        },
        colors: {
            primary: '#ffffff',
            secondary: '#0B237A',
            tertiary: '#444EA3',
            disable: '#7D7D7D',
            error: '#991B1E',
            black: '#121212',
            black_trans: 'rgba(0,0,0,0.5)',
            transparent: 'transparent',
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
