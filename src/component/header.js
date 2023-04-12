import React from "react";
import logo from "../assets/greenzonnobg.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleShowMenu = () =>{
    setShowMenu(preve => !preve);
  }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-green-700 text-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
            <img className="h-full" src={logo} alt="" />
          </div>
        </Link>
        <div className=" font-bold flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-md mt-3">
            <Link to={""}>Accueil</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>À propos</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-3xl text-white relative cursor-pointer ">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-black bg-yellow-500 h-4 w-4 text-xs rounded-full text-center font-bold  ">
              0
            </div>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div  className="text-4xl cursor-pointer text-white">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute right-0 bg-white py-3 px-2 mt-3  shadow drop-shadow-md flex flex-col">
                <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer">
                  Nouveau produit
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">Se connecter</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
