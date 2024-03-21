import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

// const items = [
//     { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
//   ];

const Pagination = () => {
  return (
<div>
    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px " aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400  hover:bg-gray-100 rounded-full "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-8 w-8 text-gray-900" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900  hover:bg-gray-100 rounded-full focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm rounded-full"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full "
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full  md:inline-flex"
            >
              3
            </a>
            <a
              href="#"
              className="relative hidden bg-indigo-600 items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full  md:inline-flex"
            >
              4
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full "
            >
              5
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full "
            >
              6
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-100 rounded-full "
            >
              7
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400  hover:bg-gray-100 rounded-full "
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-8 w-8 text-gray-900" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pagination;