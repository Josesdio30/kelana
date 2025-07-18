import React from 'react'
import {FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-full'>
      <div className='flex items-center gap-4 w-full'>
        <FaMap className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
          <input type="text" placeholder='Where are you going?' className='w-full outline-none border-none placeholder:text-gray-800' />
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Check In</p>
          <input type="date" className='outline-none border-none' />
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Check Out</p>
          <input type="date" className='outline-none border-none' />
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <FaUserGroup className='w-6 h-6 text-blue-600'/>
        <div>
          <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
          <p className='text-base font-normal'> 1 guest 1 pax</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
