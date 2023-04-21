import React from 'react'
import {MdAddShoppingCart} from "react-icons/md";


const CardFeature = ({image, nom, prix, categorie, loading}) => {
  return (
    <div className='flex flex-col bg-green-700 rounded-lg p-7 min-w-max mt-5 justify-center shadow-lg gap-2 relative font-semibold'>
   {nom ? (<>
    <img className='w-16 h-16 rounded-full mb-2 self-center' src={image} alt="" />
    <h1 className='text-xs'>{nom}</h1>
    {/* <p>{description}</p> */}
    <div >{prix}
    <div className=" text-white text-4xl inline-block absolute right-5 bottom-3 cursor-pointer hover:text-yellow-500">
    <MdAddShoppingCart className='text-[.7em]'/>
    </div>
    </div>
   </>):
          <div className="flex items-center justify-center align-middle">
  <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-500 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
        </div>}
    
</div>
  )
}

export default CardFeature