import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"
import { ImageToBase64String } from '../utilities/imageToBase64';
import { useState } from 'react';
const NewProduct = () => {
  const [data, setData] = useState({
    nom: "",
    categorie: "",
    image: "",
    prix: "",
    description: "",
  });
  const handleOnChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const handleUploadImage = async (e) => {
    //console.log("############Image", e.target.files[0])
    const data = await ImageToBase64String(e.target.files[0]);
    //console.log(data);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
    
  };
   const handleSubmit = (event) => {
    event.preventDefault()
    console.log("PRODUCT DATA",data)
   }
  return (
    
    <div className='p-4 flex flex-col items-center justify-center ' >
      <p className="mb-4 text-white font-extrabold text-lg">Ajouter un nouveau produit !</p>
      <form className="m-auto  w-full max-w-md shadow flex flex-col p-3 rounded-md" action="" onSubmit={handleSubmit}>
        <label className='text-white font-semibold mb-3' htmlFor="name">Nom</label>
          <input onChange={handleOnChange} className='outline-none rounded-md mb-3 p-2 bg-green-100' type={"text"} name="nom" />
          <label htmlFor='categorie' className='mb-3 text-white font-semibold '>Catégorie</label>
        <select className='rounded-md mb-4 p-3 bg-green-100 ' name="categorie" onChange={handleOnChange}>
          <option value="Fruits">Fruits</option>
          <option value="Légumes">Légumes</option>
          <option value="Glaces">Glaces</option>
          <option value="Crêpes">Crêpes</option>
          <option value="Pizza">Pizza</option>
         
        </select>
        <label className=' mb-1 text-white font-semibold' htmlFor="image">Image
        <div className="h-25 w-full bg-green-100 my-3 rounded-md flex items-center justify-center ">
          {data.image ? <img className='rounded-full p-2 m-3 w-40 h-40 cursor-pointer' src={data.image} alt="" />:<span className='text-8xl cursor-pointer text-yellow-500 hover:bg-slate-200 rounded-full p-2 m-3 ease-in duration-300'><AiOutlineCloudUpload/></span>}
        <input
            type={"file"}
            id="image"
            className="hidden"
            onChange={handleUploadImage}
            accept="image/*"
          />
        </div>
        </label>
        <label className=' mb-3 text-white font-semibold' htmlFor="prix">Prix</label>
        <input onChange={handleOnChange} type={"text"} name="prix" className="outline-none rounded-md mb-3 p-2 bg-green-100"/>
        <label className=' mb-3 text-white font-semibold' htmlFor="description">Description</label>
        <textarea onChange={handleOnChange} className='outline-none rounded-md mb-3 p-2 bg-green-100 resize-none' name="description" id="" cols="30" rows="2"></textarea>
        <button  className=" w-full max-w-[150px] m-auto text-xl text-white font-bold mt-4 p-1 bg-yellow-500 hover:bg-yellow-600 rounded-md">Ajouter !</button>
      </form>
      
    </div>
  )
}

export default NewProduct