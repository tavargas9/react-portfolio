import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPersonSkiing } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const products = [
  { name: 'GitHub', href: 'https://github.com/tavargas9', icon: faGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tomas-vargas/', icon: faLinkedin },
  { name: 'Email', href: 'mailto:tavargas9@gmail.com', icon: faEnvelope },
  { name: 'Resume', href: 'https://docs.google.com/document/d/1GGgOg79XssZUwLwDPxBqFXk19thKYPebRwL9RNlLg0c/edit?usp=sharing', icon: faPersonSkiing },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 z-10 w-full border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="group h-8 w-auto bg-gradient-to-r from-blue-500 to-orange-500 hover:bg-gradient-to-l text-transparent bg-clip-text focus:ring-blue-200 text-4xl ml-3 font-bold transition ease-in">
              tav<span className='text-orange-500 group-hover:text-blue-700'>.</span>
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-900 enabled:hover:text-orange-500 transition ease-in">
              Contact
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-32 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                        <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-blue-900 group-hover:text-orange-500" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} target='_blank' className="block font-semibold text-blue-900 hover:text-orange-500">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/portfolio" className="text-sm font-semibold leading-6 text-blue-900 hover:text-orange-500 transition ease-in">
            Portfolio
          </a>
          <a href="/" className="text-sm font-semibold leading-6 text-blue-900 hover:text-orange-500 transition ease-in">
            Home
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="group h-8 w-auto bg-gradient-to-r from-blue-500 to-orange-500 hover:bg-gradient-to-l text-transparent bg-clip-text focus:ring-blue-200 text-4xl ml-3 font-bold transition ease-in">
                tav<span className='text-orange-500 group-hover:text-blue-800'>.</span>
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50">
                        Contact
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            target='_blank'
                            className="flex justify-start items-center rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-900 hover:bg-gray-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                              <FontAwesomeIcon icon={item.icon} className="h-5 w-5 text-blue-900 group-hover:text-orange-500" aria-hidden="true" />
                            </div>
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50"
                >
                  Portfolio
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50"
                >
                  Home
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
