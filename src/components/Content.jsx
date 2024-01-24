import { faCode, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg lg:mt-16">
              <h2 className="text-4xl font-semibold leading-7 text-blue-800">
                Tomas Antonio Vargas
                </h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-blue-500 inline-block text-transparent bg-clip-text sm:text-3xl">Web Developer</h1>
              <p className="mt-6 text-xl leading-8 text-blue-900">
                Currently residing in <span className='text-orange-500'>Salt Lake City, Utah</span>
                , and originally from the New York City metro area, Tomas' web dev journey started after graduating with a B.S. in Business 
                from <span className='text-orange-500'>Syracuse University</span> and attending the 
                <span className='text-orange-500'> University of Utah</span> Coding Bootcamp.
              </p>
              <div className='mt-8 flex justify-evenly items-center'>
                <button className='group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2'>
                    <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                        Featured Projects <FontAwesomeIcon icon={faCode} className="ml-2"/>
                    </span>
                </button>
                <button className='group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-gradient-to-r from-blue-500 to-orange-500 enabled:hover:bg-gradient-to-l focus:ring-blue-200 dark:focus:ring-blue-800 rounded-full focus:ring-2'>
                    <span className='items-center flex justify-center bg-white text-blue-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full rounded-full text-sm px-4 py-2 border border-transparent'>
                        Download Resume <FontAwesomeIcon icon={faCircleDown} className="ml-2"/>
                    </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-xl max-w-full rounded-full bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="src/assets/tj2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
