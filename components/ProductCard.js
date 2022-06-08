import Image from 'next/image'
import Currency from 'react-currency-formatter'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

export default function ProductCard({id,title,category,price,image,description,rating,count}) {
  return (
    <div className= ' flex flex-col space-y-1  p-2 hover:shadow-lg cursor-pointer'>
        <FavoriteIcon className='text-gray-500 text-sm font-light justify-end items-end'/>
        <Image src={image} height={240} width={80} objectFit='contain' alt='ProductImage'/>
        <div className='text-sm'>{title}</div>
        <div className='text-gray-500 text-xs'>{category}</div>
        <div className='flex flex-row items-center'>
          <div className='bg-green-700 text-white text-xs flex flex-row items-center space-x-1 px-1 pr-1 rounded-sm'>
            <div>{rating && rating.rate}</div>
            <StarIcon className='text-xs' />
          </div>
          <div className='px-1 text-xs text-gray-400'>({rating && rating.count})</div>
          <Image src="/fp-assured.png" width={50} height={15} alt='assured'/>
        </div>
        <div><Currency quantity={price} currency="INR" /></div>
        <div className='text-xs'>free delivery</div>
        <div className='text-sm text-green-700'>Bank offer</div>
        
    </div>
  )
}
