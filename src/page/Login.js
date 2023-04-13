import React from "react";

import liginSignUpImage from "../assets/SignInGreenzon-removebg-preview.png";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate()
  const userData = useSelector(state=>state)
  console.log(userData)
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //console.log(data);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const dataResponse = await fetchData.json();
      console.log(dataResponse);
      toast(dataResponse.message);
      if(dataResponse.alert){
        navigate("/")
      }
    } else {
      alert("enter required fields");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md  m-auto flex justify-center flex-col items-center p-4  bg-green-700 rounded-md mt-5">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className=" bg-green-700 w-44 overflow-hidden ">
          <img src={liginSignUpImage} alt="" className="w-full" />
        </div>
        <form
          className="w-full flex flex-col gap-4 py-3"
          action=""
          onSubmit={handleSubmit}
        >
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

          <button className=" w-full max-w-[150px] m-auto text-xl text-white font-bold mt-4 p-1 bg-yellow-500 hover:bg-yellow-600 rounded-md">
            Connexion
          </button>
        </form>
        <p className="text-white mt-2 font-semibold">
          Pas encore inscrit·e ?{" "}
          <Link className="text-yellow-500 underline" to={"/signup"}>
            Inscription
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
