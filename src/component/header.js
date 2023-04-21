import React from "react";
import logo from "../assets/greenzonnobg.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import {MdShoppingCart} from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
const Header = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  //console.log("coucou", userData.image);

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast(`${userData.firstName} est déconnecté·e`);
  };
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
          <nav className="md:flex md:gap-7 hidden gap-4 text-md mt-7 ">
            <Link to={""}>Accueil</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>À propos</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-4xl text-white relative cursor-pointer mt-3 ">
            <MdShoppingCart />
            <div className="absolute -top-1 -right-[.5em] text-black bg-yellow-500 h-4 w-4 text-[.4em] rounded-full text-center font-bold  ">
               <span className="absolute -top-[.8em] right-[.2rem] ">0</span>
            </div>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-5xl cursor-pointer text-white mt-1">
              {userData.image ? (
                <img
                  className="w-10 h-10 rounded-full overflow-hidden shadow-md drop-shadow-md"
                  src={userData.image}
                  alt="profil"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-0 bg-white  mt-[.4em]  shadow drop-shadow-md flex flex-col rounded-sm">
              

                {userData.email ? (
                  <p
                    onClick={handleLogout}
                    className="whitespace-nowrap cursor-pointer text-red-700 hover:bg-slate-300 rounded-sm py-3 px-2 "
                  >
                    Déconnecter {userData.firstName} 
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer text-green-700 hover:bg-slate-300 rounded-sm py-3 px-2 "
                  >
                    Se connecter
                  </Link>
                )}
                  {process.env.REACT_APP_ADMIN_EMAIL === userData.email ? (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2  py-1 hover:bg-slate-300 rounded-sm"
                  >
                    Nouveau produit
                  </Link>
                ) : (
                  ""
                )}
                   <nav className="md:hidden gap-1 text-md mt-2 flex flex-col ">
            <Link className="hover:bg-slate-300 py-1 px-2 rounded-sm" to={""}>Accueil</Link>
            <Link className="hover:bg-slate-300 py-1 px-2 rounded-sm" to={"menu"}>Menu</Link>
            <Link className="hover:bg-slate-300 py-1 px-2 rounded-sm" to={"about"}>À propos</Link>
            <Link className="hover:bg-slate-300 py-1 px-2 rounded-sm" to={"contact"}>Contact</Link>
          </nav>
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
