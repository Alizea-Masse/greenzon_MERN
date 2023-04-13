import "./App.css";
import Header from "./component/header";
import { Outlet } from "react-router-dom";
import{ Toaster } from "react-hot-toast";

function App() {
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
