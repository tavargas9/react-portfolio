import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { faCode, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
   
  export default function CardDefault({ projects }) {
    return (
        <div className="flex flex-col mt-32 items-center">
            <h2 className="text-4xl h-10 font-semibold leading-7 bg-gradient-to-r from-orange-500 to-blue-500 inline-block text-transparent bg-clip-text">
                Porfolio
            </h2>
            <p className="text-lg font-semibold text-blue-900 mb-12">(Aug 2023-Present)</p>
            <div className="flex flex-wrap gap-12 justify-evenly px-20">
            {projects.map((project) => (
                <Card className="mt-6 w-96 hover:shadow-blue-800 transition ease-in">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src={project.img}
                            alt={project.name}
                            className="object-cover h-full w-full"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" className="mb-2 text-blue-900">
                            {project.name}
                        </Typography>
                        <Typography>
                            {project.desc}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 flex justify-between">
                        <Button
                            onClick={() => window.open(project.href, '_blank')}
                            className="rounded-full group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2"
                            ripple={false}
                        >
                            <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                                Live Demo <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
                            </span> 
                        </Button>
                        <Button
                            onClick={() => window.open(project.href, '_blank')}
                            className="rounded-full group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2"
                            ripple={false}
                        >
                            <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                                Code <FontAwesomeIcon icon={faCode} className="ml-2"/>
                            </span> 
                        </Button>
                    </CardFooter>
                </Card>
            ))}
            </div>
        </div>

    );
  }