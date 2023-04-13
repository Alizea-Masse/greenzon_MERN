import React from "react";
import liginSignUpImage from "../assets/SignInGreenzon-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import {ImageToBase64String} from '../utilities/imageToBase64'
const SignUp = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data,setData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image : "",
  });
  //console.log(data);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleOnChange = (event) => {
    const {name,value} = event.target
    setData((prev)=>{
        return {
            ...prev,
            [name]: value,
            

        }

    })
  };
  const handleUploadProfilImage = async (e) => {
        //console.log(e.target.files[0])
        const data = await ImageToBase64String(e.target.files[0])
        console.log(data)
        setData((prev) => {
            return {
                ...prev,
                image: data
            }
        })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {firstName,email,password,confirmPassword} = data;
    if (firstName && email && password && confirmPassword){
        if(password === confirmPassword){
            alert("Succes");
            navigate("/login")
        }else {
            alert("Les mots de passe ne sont pas identiques");
        }
    }else {
        alert("Entrez un mot de passe !")
    } 
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md  m-auto flex justify-center flex-col items-center p-4  bg-green-700 rounded-md mt-5">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className=" bg-green-700 w-40 overflow-hidden rounded-full drop-shadow-md m-auto relative ">
          <img src={data.image ? data.image : liginSignUpImage} alt="" className="w-full" />
        </div>
        <label htmlFor="profileImage">
          <div className=" text-[0.7em] p-[0.3em] mt-3 text-white font-semibold shadow-md bg-yellow-500 rounded-md cursor-pointer">
            <p>Ajouter une photo</p>
          </div>
          <input type={"file"} id="profileImage" className="hidden" onChange={handleUploadProfilImage} accept="image/*" />
          </label>
        <form className="w-full flex flex-col gap-4 py-3" action="" onSubmit={handleSubmit}>
          <div>
            <label className="text-white font-bold" htmlFor="lastName">
              Nom
            </label>
            <input
              type={"text"}
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleOnChange}
              className="w-full bg-white outline-none rounded-md px-2 py-1 mt-1 focus-within:outline-yellow-500"
            />
          </div>
          <div>
            <label className="text-white font-bold" htmlFor="firstName">
              Prénom
            </label>
            <input
              type={"text"}
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleOnChange}
              className="w-full bg-white outline-none rounded-md px-2 py-1 mt-1 focus-within:outline-yellow-500 "
            />
          </div>
          <div>
            <label className="text-white font-bold" htmlFor="email">
              Email
            </label>
            <input
              type={"email"}
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              className="w-full bg-white outline-none rounded-md px-2 py-1 mt-1 focus-within:outline-yellow-500"
            />
          </div>
          <div>
            <label className="text-white font-bold " htmlFor="password">
              Mot de passe
            </label>
            <div className="flex px-2 py-1 bg-white rounded-md mt-1 outline-none focus-within:outline-yellow-500 ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full outline-none   "
              />
              <span
                onClick={handleShowPassword}
                className="text-green-800 flex text-xl gap-3 "
              >
                {showPassword ? (
                  <BiShow className="cursor-pointer" />
                ) : (
                  <BiHide className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <div>
            <label className="text-white font-bold " htmlFor="confirmPassword">
              Confirmer le mot de passe
            </label>
            <div className="flex px-2 py-1 bg-white rounded-md mt-1 outline-none focus-within:outline-yellow-500 ">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleOnChange}
                className="w-full outline-none   "
              />
              <span
                onClick={handleShowConfirmPassword}
                className="text-green-800 flex text-xl gap-3 "
              >
                {showConfirmPassword ? (
                  <BiShow className="cursor-pointer" />
                ) : (
                  <BiHide className="cursor-pointer" />
                )}
              </span>
            </div>
          </div>
          <button className=" w-full max-w-[150px] m-auto text-xl text-white font-bold mt-4 p-1 bg-yellow-500 hover:bg-yellow-600 rounded-md">S'inscrire</button>
        </form>
        <p className="text-white mt-2 font-semibold">Déjà inscrit·e ? <Link className="text-yellow-500 underline" to={"/login"}>Connexion</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
