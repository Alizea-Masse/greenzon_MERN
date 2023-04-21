import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'
const FilterProduct = ({categorie}) => {
  return (
    <div>
    <div className="text-3xl p-5 bg-yellow-500 rounded-full">
    <ImSpoonKnife/>
  </div>
  <p className='text-center font-bold my-1 capitalize'>{categorie}</p>
  </div>
  )
}

export default FilterProduct