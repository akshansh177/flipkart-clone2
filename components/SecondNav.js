import React from 'react'
import HeaderLink from './HeaderLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Example from './Dropdown'

function SecondNav() {
  return (
      <div className='bg-white p-2 px-40 text-gray-800 flex flex-row font-semibold justify-between items-center text-sm'>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Electronics"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Tvs & Appliances"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Men"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Women"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Baby & Kids"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Home & Furniture"/>
          <HeaderLink Icon={KeyboardArrowDownIcon} text="Sports,Books & More"/>
          <a href="https://google.com" className='hover:text-blue-600'>Offer Zone</a>
          <a href="https://google.com" className='hover:text-blue-600'>Grocery</a>
      </div>
      )
}

export default SecondNav