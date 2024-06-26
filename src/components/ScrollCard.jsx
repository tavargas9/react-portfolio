import { Carousel, Typography, Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import emp_tracker from '../assets/emp_tracker.png'
import snapi from '../assets/snapi.png'
import jate from '../assets/jate.png'

export default function ScrollCard() {

    const clickLink = (link) => {
        window.open(link, '_blank')
    };

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
            img: 'https://github.com/tavargas9/weather-daddy/blob/main/assets/icons/Screenshot%202023-10-03%20at%201.53.38%20AM.png?raw=true',
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
            img: 'https://github.com/tavargas9/movie-soundtrack-id/blob/main/assets/images/Screenshot%202023-10-12%20at%2010.17.08%20PM.png?raw=true',
            repo: 'https://github.com/tavargas9/movie-soundtrack-id', 
        },
        {
            name: 'Social Network API',
            href: 'https://github.com/tavargas9/social-network-API',
            desc: 'An Express.js and MongoDB based API for a social network web appilcation',
            img:   snapi,
            repo: 'An Express.js and MongoDB based API for a social network web appilcation'
        }
    ];

  return (  
    <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-bold mb-5 text-blue-800' id='featured-projects'>
            Featured Projects
        </h2>
        <a href='/portfolio' className='mb-5'>
            <button 
                className='group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2'
            >
                <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                    See Full Portfolio <FontAwesomeIcon icon={faRightToBracket} className="ml-2"/>
                </span>
            </button>
        </a>
        <div className='w-full md:w-3/4 h-screen md:h-[700px] mb-12' >
            <Carousel 
            transition={{ duration:1 }} 
            autoplay={true} 
            loop={true} 
            className="rounded-xl"
            >
                {projects.map((item) => (
                <div className="relative h-full">
                    <img
                        src={item.img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {item.desc}
                            </Typography>
                            <div className="flex gap-2">
                                <Button className='rounded-full' ripple={false} size="lg" color="white" onClick={() => clickLink(item.href)}>
                                Live Demo
                                </Button>
                                <Button className='rounded-full' ripple={false} size="lg" color="white" variant="text" onClick={() => clickLink(item.repo)}>
                                View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Carousel>
        </div>
    </div>
  );
}