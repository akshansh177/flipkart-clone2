
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


function Sidebar() {
  const sideList = ["Gaming Console","Gaming Laptops","Games","Gaming Accesories","Gaming headsets"]
  const brandList = ["Logitech","Hp","Asus","Aorus","Leggion"]
  return (
      
    <div className='bg-white w-3/12 flex flex-col divide-y-2 space-y-4'>
        <h4 className='text-xl font-medium pl-3 pt-4'>Filters</h4>
        <div className='pl-2'>
            <div className='text-xs font-medium p-2'>
                CATEGORIES
            </div>
        <div className=" pl-4">
            <div className="text-base">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex text-left text-sm font-semibold">
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-500`}
                        />     
                        <span>Gaming</span>
                        
                    </Disclosure.Button>
                    <Disclosure.Panel className=" flex flex-col space-y-1 pl-8 pt-2 text-sm text-gray-700">
                        <ul>{sideList.map(sideList =><a className='flex flex-col' href='https://google.com'>{sideList}</a>)}</ul>
                        <ul><a href='https://google.com' className='text-blue-700'>Show +1 more</a></ul>
        
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
         </div>  
        </div>
        
        <div className='px-3 pt-3 pl-3 flex space-x-5 items-center'>
          <Checkbox size='small'/>
          <Image src="/fp-assured.png" width={70} height={20} alt='assured'/>              
        </div>
        <div className='text-sm pl-5 p-2'>
            <div className='flex flex-col'>
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex text-left text-sm font-medium justify-between">
                        <span>BRAND</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-500`}
                        />     
                        
                    </Disclosure.Button>
                    <Disclosure.Panel className=" flex flex-col space-y-1 pl-3 pt-2 text-sm text-gray-700">
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="Search" variant="standard" />
                            </Box>
        
                        
                        <ul>{brandList.map(brandList =><ul className='flex items-center' href='https://google.com'><Checkbox size='small'/>{brandList}</ul>)} </ul>
                        <ul><a href='https://google.com' className='text-blue-700'>Show +1234 more</a></ul>
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
    </div>
  )
}

export default Sidebar