import { ChevronRightIcon, CalendarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts} = props
    
  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80 '>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col'>
            <p className='flex gap-2'>
            <CalendarIcon className="h-6 w-6 text-black cursor-pointer" />
            <span>16.01.2024</span>
            </p>
            <p className='flex gap-2'>
            <ShoppingBagIcon className="h-6 w-6 text-black cursor-pointer" />
            <span className='font-light'>{totalProducts} Articles</span>
            </p>
          </div>
          <p className='flex items-center gap-2'>
            <span className='font-medium text-2xl'>${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />

          </p>
           
        </div>
    </div>
  )
}

export default OrdersCard