import { Typography } from "@material-tailwind/react";
import tLogo from '../assets/t.svg'
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-12">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={tLogo} alt="logo-ct" className="w-8 2xl:ml-72" />
        <ul className="flex lg:flex-1 flex-wrap items-center justify-end gap-y-2 gap-x-12 2xl:mr-72">
          <li>
            <Typography
              as="a"
              href="https://github.com/tavargas9"
              target="_blank"
              color="blue-gray"
              className="font-bold transition-colors text-blue-900 hover:text-orange-500 focus:text-orange-500"
            >
              GitHub
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/tomas-vargas/"
              target="_blank"
              className="font-bold transition-colors text-blue-900 hover:text-orange-500 focus:text-orange-500"
            >
              LinkedIn
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="mailto:tavargas9@gmail.com"
              color="blue-gray"
              className="font-bold transition-colors text-blue-900 hover:text-orange-500 focus:text-orange-500"
            >
              Email Me
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 (MIT) Tomas Antonio Vargas
      </Typography>
    </footer>
  );
}