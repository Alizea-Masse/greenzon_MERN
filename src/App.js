import "./App.css";
import Header from "./component/header";
import { Outlet } from "react-router-dom";
import{ Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
(async()=>{
  const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
  const resData = await res.json()
  console.log(resData)
})()
  },[])
  return (
    <>
     <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-green-600 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
