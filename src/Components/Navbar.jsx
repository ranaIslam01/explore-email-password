import React from 'react';
import { NavLink } from 'react-router-dom';
const navLink = [
   {
      id: 1,
      name: "Home",
      path: "/"
   },
  
   {
      id:4,
      name: "Sign Up",
      path: "/sign-up"
   },
   {
      id: 3,
      name: "Login",
      path: "/login"
   },
]
const Navbar = () => {
   return (
      <div>

         <ul className='flex flex-row justify-center gap-8 py-6 bg-gray-200  text-xl font-semibold shadow-md'>
            {
               navLink.map((nav) => {
                  return(
                     <li key={nav.id}>
                        <NavLink to={nav.path} className={({isActive}) => isActive?"text-blue-600 font-bold": ""}> {nav.name} </NavLink>
                     </li>
                  )
               })
            }
         </ul>
      </div>
   );
};

export default Navbar;