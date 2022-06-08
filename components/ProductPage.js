import { RateReview } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
import ProductCard from './ProductCard';

export default function ProductPage({products}) {
  const SortingList = ["Popuarity","Price - Low to High","Price - High to Low","Newest First"];
  return (
    <div className='flex flex-col bg-white w-9/12'>
        <div className='flex p-2 pl-3 text-xs text-gray-600 font-light items-center space-x-1'>
          <a href='#' className='hover:text-blue-500'>Home</a>
          <ArrowForwardIosIcon className='text-xs' />
          <a href='#' className='hover:text-blue-500'>Gaming</a>
        </div>
        <div className='flex flex-row items-baseline pl-3'>
          <div className='font-semibold'>Gaming</div>
          <div className=' text-xs text-gray-700 font-light pl-2'><p>(Showing 1 - 40 products of 41,701 products)</p></div>
        </div>
        <div className='p-1 pl-3 text-sm flex flex-row space-x-2'>
          <div className='font-semibold'>Sort By</div>
          <ul>{SortingList.map(SortingList =><a className='px-3 space-x-4 hover:text-blue-500 hover:underline hover:underline-offset-4' key={SortingList} href='https://google.com'>{SortingList}</a>)}</ul>
        </div>
        <Divider />
         <div className='grid grid-cols-4 grid-rows-3 p-5 space-x-4'>
                {products.map(({id,title,category,price,image,description,rating}) => (
                <ProductCard
                  key={id}
                  title={title}
                  description={description}
                  image={image}
                  price={price}
                  category={category}
                  rating={rating}
                /> ))}
        </div>
        
    </div>
  
  )
}

