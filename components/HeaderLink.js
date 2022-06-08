import React from 'react'

function HeaderLink({Icon,text}) {
  return (
      <div>
       <ul className="w-full flex items-center justify-around">
    <li className="group  relative dropdown px-2 hover:text-blue-600 cursor-pointer font-medium text-sm  tracking-wide hover:bg-white">
        <div classNameName='flex justify-center items-center'><a>{text}</a>
        <Icon classNameName='h-5 w-5 opacity-40 hover:rotate-180'/>
        </div>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">

        <ul className="top-0 w-48 bg-white shadow px-6 py-8 hover:bg-white">
            <li className="py-1"><a className="block text-gray-500 font-medium text-sm  hover:text-blue-700 cursor-pointer">Item</a></li>
            <li className="py-1"><a className="block text-gray-500 font-medium text-sm  hover:text-blue-700 cursor-pointer">Item 2</a></li>
            <li className="py-1"><a className="block text-gray-500 font-medium text-sm  hover:text-blue-700 cursor-pointer">Item 3</a></li>
            <li className="py-1"><a className="block text-gray-500 font-medium text-sm  hover:text-blue-700 cursor-pointer">Item 4</a></li>
            <li className="py-1"><a className="block text-gray-500 font-medium text-sm  hover:text-blue-700 cursor-pointer">Item 5</a></li>
        </ul>
        </div>
    </li>
</ul>
</div>



  )
}

export default HeaderLink