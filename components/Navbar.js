import HeaderLink from './HeaderLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { getProviders, signIn } from "next-auth/react";



function Navbar({provider}) {

  return (
    <div className='bg-[#2973F0] text-white text-base py-3 px-6 flex flex-row space-x-8 font-semibold justify-center items-center '>
       <div className='text-2xl italic hover:cursor-pointer'>Flipkart</div>
       <label class="relative text-gray-400 focus-within:text-gray-600 block w-4/12 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 absolute pl-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <input type="search" name="Search"  placeholder="Search for products,brands and more" class=" text-sm shadow-lg border border-gray-800/30 rounded-sm py-4 px-4 bg-white placeholder-gray-400 text-gray-700 appearance-none h-8 w-full block pl-8 focus:outline-none" />
        </label>
        
        {/* {Object.values(providers).map((provider) => ( */}
       {/* <div > key={provider.name} */}
         <button className='  font-semibold text-base py-1 px-10 bg-slate-50 text-[#2973F0]'  onClick={() => signIn(provider.id, { callbackUrl: "/index.js" })}>Login</button>
          {/* </div> */}
          {/* ))} */}
       <div className='hover:cursor-pointer'>Become a seller</div>
       <HeaderLink Icon={KeyboardArrowDownIcon} text="More" />
       <div className='flex flex-row justify-center items-center hover:cursor-pointer'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Cart
        </div>
    </div>

  )
}

export default Navbar;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}