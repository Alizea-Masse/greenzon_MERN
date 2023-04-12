import React from "react";
import liginSignUpImage from "../assets/SignInGreenzon-removebg-preview.png";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md  m-auto flex justify-center flex-col items-center p-4  bg-green-700 rounded-md mt-20">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className=" bg-green-700 w-44 overflow-hidden ">
          <img src={liginSignUpImage} alt="" className="w-full" />
        </div>
        <form className="w-full flex flex-col gap-4 py-3" action="">
          <div>
            <label className="text-white font-bold" htmlFor="lastName">
              Nom
            </label>
            <input
              type={"text"}
              id="lastname"
              name="lastname"
              className="w-full bg-white outline-none rounded-md px-2 py-1 mt-1 focus-within:outline-yellow-500"
            />
          </div>
          <div>
            <label className="text-white font-bold" htmlFor="firstName">
              Prénom
            </label>
            <input
              type={"text"}
              id="firstname"
              name="firstname"
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
            <label className="text-white font-bold " htmlFor="password">
              Confirmer le mot de passe
            </label>
            <div className="flex px-2 py-1 bg-white rounded-md mt-1 outline-none focus-within:outline-yellow-500 ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
