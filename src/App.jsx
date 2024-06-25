import { NavLink } from "react-router-dom"

import { useState } from "react";

function App() {
  const [open, setOpen] =useState(false);
  console.log(open);

  
  return (
    <>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[98%] mx-auto">
          <div>
            <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"></img>
          </div>
          <div className={`md:static md:min-h-fit  md:w-auto  absolute min-h-[60vh] bg-white left-0  w-full flex items-center pt-10 md:pt-0 pl-1 duration-500   ${open ? 'top-14 ' : 'top-[-100%]'}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-bold">
              <li><NavLink className='hover:text-red-500' to="/">HOME</NavLink></li>
              <li><NavLink className='hover:text-red-500' to="#contactUs">CONTACT US</NavLink></li>
              <li><NavLink className='hover:text-red-500' to="#/dashBord">DASHBOARD</NavLink></li>
              <li><NavLink className='hover:text-red-500' to="#/ourMenu">OUR MENU</NavLink></li>
              <li><NavLink className='hover:text-red-500' to="#/ourShop">OUR SHOP</NavLink></li>
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <button className="bg-[#577dc0] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in
            </button>
            <div  onClick={()=>setOpen(!open)} className="text-3xl cursor-pointer md:hidden mt-2">
              <ion-icon name={open ? 'close': 'menu'} ></ion-icon>
            </div>

          </div>
        </nav>
      </header>
    </>
  )
}

export default App
