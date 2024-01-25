import { Carousel, Typography, Button } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ScrollCard() {

    const clickLink = (link) => {
        window.open(link, '_blank')
    };

    const projects = [
        { name: 'Weather Daddy', href: 'https://tavargas9.github.io/weather-daddy/', desc: 'A simple weather dashboard web application built with jQuery and Tailwind', img: 'https://github.com/tavargas9/weather-daddy/blob/main/assets/icons/Screenshot%202023-10-03%20at%201.53.38%20AM.png?raw=true'},
        { name: 'Employee Tracker', href: 'https://github.com/tavargas9/employee-tracker', desc: 'A MySQL-based CLI database management tool', img: 'https://private-user-images.githubusercontent.com/142061829/298175383-2c22948a-4371-4a1c-8a76-3903e931ab6e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYxNDIyMjQsIm5iZiI6MTcwNjE0MTkyNCwicGF0aCI6Ii8xNDIwNjE4MjkvMjk4MTc1MzgzLTJjMjI5NDhhLTQzNzEtNGExYy04YTc2LTM5MDNlOTMxYWI2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEyNVQwMDE4NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMjIzMzY0ODNhMmU4NGEzZjQzZTg2Nzg1MWY5ZGJmYmM2ZWUwMzkwY2FmMTg2OTk0YWUwODg1OTE5NmFkOGM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.tvModBd30SAm08xFPvh7r4aWFNNcwu3ykD78JFMdtQw'},
        { name: 'Movie Soundtrack Identifier', href: 'https://tavargas9.github.io/movie-soundtrack-id/', desc: 'Find and listen to the soundtracks of your favorite movies', img: 'https://github.com/tavargas9/movie-soundtrack-id/blob/main/assets/images/Screenshot%202023-10-12%20at%2010.17.08%20PM.png?raw=true' }
    ];

  return (  
    <Carousel transition={{ duration:1 }} className="rounded-xl w-full">
        {projects.map((item) => (
        <div className="relative h-96">
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
                        <Button size="lg" color="white" onClick={() => clickLink(item.href)}>
                        Live Demo
                        </Button>
                        <Button size="lg" color="white" variant="text" >
                            View Code
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </Carousel>
  );
}