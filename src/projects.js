import snapi from './assets/snapi.png'
import js_quiz from './assets/js_quiz.gif'
import readme from './assets/readme.png'
import emp_tracker from './assets/emp_tracker.png'
import dish_disc from './assets/dish_disc.png'
import ecom_api from './assets/ecom_api.png'
import notetakr from './assets/notetakr.png'
import wd_sched from './assets/wd_sched.png'
import jate from './assets/jate.png'

const projects = [
    {
        name: 'JATE Text Editor',
        href: 'https://jate-text-editor-kpic.onrender.com/',
        desc: 'A PWA text editor built with Webpack, Node, and Express. (This app is deployed using free version of Render, please allow 50 seconds or more to spin up.)',
        img: jate,
        repo: 'https://github.com/tavargas9/JATE-Text-Editor'
    },
    { 
        name: 'Weather Daddy', 
        href: 'https://tavargas9.github.io/weather-daddy/', 
        desc: 'A simple weather dashboard web application built with jQuery and Tailwind', 
        img:  'https://github.com/tavargas9/weather-daddy/blob/main/assets/icons/Screenshot%202023-10-03%20at%201.53.38%20AM.png?raw=true',
        repo: 'https://github.com/tavargas9/weather-daddy',
    },
    { 
        name: 'Employee Tracker', 
        href: 'https://github.com/tavargas9/employee-tracker', 
        desc: 'A MySQL-based CLI database management tool', 
        img:   emp_tracker,
        repo: 'https://github.com/tavargas9/employee-tracker',
    },
    { 
        name: 'Movie Soundtrack Identifier', 
        href: 'https://tavargas9.github.io/movie-soundtrack-id/', 
        desc: 'Find and listen to the soundtracks of your favorite movies', 
        img:  'https://github.com/tavargas9/movie-soundtrack-id/blob/main/assets/images/Screenshot%202023-10-12%20at%2010.17.08%20PM.png?raw=true',
        repo: 'https://github.com/tavargas9/movie-soundtrack-id', 
    },
    {
        name: 'Social Network API',
        href: 'https://github.com/tavargas9/social-network-API',
        desc: 'An Express.js and MongoDB based API for a social network web appilcation',
        img:   snapi,
        repo: 'https://github.com/tavargas9/social-network-API',
    },
    {
        name: 'DishDiscovery',
        href: 'https://secure-hollows-55574-70e0c84bc001.herokuapp.com/',
        desc: 'The ultimate hub for chefs and aspiring chefs to find new recipes, share culinary masterpieces, and connect with a community that shares a love for cooking',
        img:   dish_disc,
        repo: 'https://github.com/tavargas9/DishDiscovery',
    },
    {
        name: 'E-Commerce Backend API',
        href: 'https://github.com/tavargas9/E-Commerce-Backend',
        desc: 'An Express.js-based REST API for building out a functional back end for an e-commerce website',
        img:   ecom_api,
        repo: 'https://github.com/tavargas9/E-Commerce-Backend',
    },
    {
        name: 'NoteTakr',
        href: 'https://notetakr-8b74dec0dae2.herokuapp.com/',
        desc: 'A simple note taking application using Express.js',
        img:   notetakr,
        repo: 'https://github.com/tavargas9/NoteTakr',
    },
    {
        name: 'SVG LogoMaker',
        href: 'https://github.com/tavargas9/SVG-LogoMaker',
        desc: 'A command line application for generating a custom SVG logo',
        img:  'https://raw.githubusercontent.com/tavargas9/SVG-LogoMaker/main/lib/assets/screenshots/Screenshot%202023-11-02%20at%2012.10.47%20AM.png',
        repo: 'https://github.com/tavargas9/SVG-LogoMaker',
    },
    {
        name: 'README Generator',
        href: 'https://github.com/tavargas9/README-generator',
        desc: 'A command line application for generating a high-quality README file',
        img:   readme,
        repo: 'https://github.com/tavargas9/README-generator',
    },
    {
        name: 'Work Day Scheduler',
        href: 'https://tavargas9.github.io/work-day-scheduler/',
        desc: 'A simple daily planner application that allows the user to save items to their work day schedule on a per hour basis (9am-5pm).',
        img:   wd_sched,
        repo: 'https://github.com/tavargas9/work-day-scheduler',
    },
    {
        name: 'JavaScript Quiz App',
        href: 'https://tavargas9.github.io/javascript-quiz-app/',
        desc: 'A timed quiz game with questions on basic JavaScript fundamentals.',
        img:   js_quiz,
        repo: 'https://github.com/tavargas9/javascript-quiz-app',
    },
    {
        name: 'Secure Password Generator',
        href: 'https://tavargas9.github.io/secure-password-generator/',
        desc: 'A random and secure password generator built using HTML, CSS, and vanilla JavaScript.',
        img: 'https://raw.githubusercontent.com/tavargas9/secure-password-generator/main/assets/Screen%20Shot%202023-09-11%20at%209.15.14%20PM.png',
        repo: 'https://github.com/tavargas9/secure-password-generator',
    },
];

export default projects;