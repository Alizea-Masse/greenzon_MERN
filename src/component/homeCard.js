import React from 'react'


const HomeCard = ({image,nom,description,prix, loading}) => {
  return (
    <div className='flex flex-col bg-green-700 rounded-lg p-7 w-64 h-60 mt-5 justify-center shadow-lg gap-2 relative font-semibold'>
        {nom ? (
        <>
        <img className='w-24 h-24 rounded-full mb-2 self-center' src={image} alt="" />
        <h1 className='text-center'>{nom}</h1>
        {/* <p>{description}</p> */}
        <div className='text-center'>
          {prix}
        </div>
        </>

        ):
        <div className="flex items-center justify-center align-middle">
  <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-500 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
        </div>
      
        
        } 
        
    </div>
  )
}

export default HomeCard