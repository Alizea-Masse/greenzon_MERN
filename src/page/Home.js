import React, { useRef } from 'react'
import {TbBike} from 'react-icons/tb'
import HomeCard from '../component/homeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import {GrPrevious , GrNext} from 'react-icons/gr'
import FilterProduct from '../component/filterProduct'


const Home = () => {
  const productData = useSelector((state) => state.product)
  const homeProductCartList = productData.productList.slice(6,10)
  const homeProductCartListVegetables = productData.productList.filter(e => e.categorie === 'Légumes',[])
  //console.log(homeProductCartListVegetables)
  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(6).fill(null)
  const sideProductRef = useRef()
  //const slideProduct = () => { third }

  const nextProduct = () => { 
    sideProductRef.current.scrollLeft += 200
   }
  const prevProduct = () => {     sideProductRef.current.scrollLeft -= 200
 }

 const categorieList = [...new Set(productData.productList.map(e => e.categorie))]

console.log(categorieList)
  
  
  return (
    <div className='p-2 md:p-4'>
      <div className="md:flex gap-4 py-7 ">
        {/* Right section */}
      <div className="md:w-1/2">

        <div className="flex items-center justify-center gap-2 text-xl bg-yellow-500 w-44 rounded-2xl p-1 my-4">
          <TbBike/>
          <h2>Livraison à vélo</h2>
        </div>
        
        <h2 className='text-4xl font-bold md:text-7xl py-2 '> Livraison <span className='text-yellow-500'>chez vous </span> en un instant !  </h2>
        <p className='font-medium py-3  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab explicabo praesentium alias nobis corrupti eum placeat itaque voluptate nam? Rem cum autem maxime eligendi nam fugiat obcaecati tenetur vitae.
        Blanditiis quibusdam sed rerum facilis iure error suscipit magni reprehenderit saepe! Nihil, ipsam nam! Eligendi cumque architecto itaque dolores illum recusandae eius, consequuntur nostrum quidem fugit, voluptatibus inventore? </p>
        <button className=" text-xl text-black font-bold mt-4 p-2 bg-yellow-500 hover:bg-yellow-600 rounded-2xl ">Commander maintenant</button>
      </div>
       {/* Left section */}
      <div className="md:w-1/2 flex flex-wrap gap-7 justify-center">
        {homeProductCartList[0] ?  homeProductCartList.map(card=>{
          return (
        
            <HomeCard key={card._id}
            image = {card.image}
            nom = {card.nom}
            categorie= {card.categorie}
            description = {card.description}
            prix= {card.prix}

            />
           
          
          )
        })
        : loadingArray.map((e, index)=>{
          return(
              <HomeCard
              key={index}
              loading={"Chargement..."}
              />
        )
      })}
     
      </div>
      </div>

      <div className="mt-24">
       <div className="flex w-full items-center">
       <div className="font-bold text-2xl underline">Légumes</div>
       <div className="ml-auto flex gap-4">
        <button onClick={prevProduct} className='bg-green-700 rounded-lg p-2'><GrPrevious/></button>
        <button onClick={nextProduct} className='bg-green-700 rounded-lg p-2 '><GrNext/></button>
       </div>
       </div>
        <div className="flex gap-7  overflow-y-auto scrollbar-none scroll-smooth transition-all " ref={sideProductRef}>
          {
          homeProductCartListVegetables[0] ?homeProductCartListVegetables.map(e=>{
            return(
              <CardFeature
              key={e._id}
              nom={e.nom}
              categorie={e.categorie}
              prix={e.prix}
              image = {e.image}
              />
            )
          }) : loadingArrayFeature.map((e, index)=>{
            return(
                <CardFeature
                key={index}
                loading={"Chargement..."}
                />
          )
        })
          }
        
        </div>
      </div>
      <div className="my-5">
      <div className="font-bold text-2xl underline">Vos produits</div>
      </div>
      <div className="flex gap-4">
       <FilterProduct categorie="fruits"/>
       <FilterProduct/>
       <FilterProduct/>
       <FilterProduct/>
      </div>
    </div>
  )
}

export default Home