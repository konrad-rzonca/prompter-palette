/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['ui-sans-serif','system-ui','Inter','Segoe UI','Roboto','Helvetica','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol']
            },
            boxShadow: {
                'soft': '0 10px 25px -10px rgba(2,6,23,0.2)'
            }
        },
    },
    plugins: [],
}
