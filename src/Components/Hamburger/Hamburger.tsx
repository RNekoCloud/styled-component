import { Wrapper } from "./Hamburger.style";
import { useEffect, useState } from "react";
import "./Style.css";

interface EventProps {
   isOpen: boolean;
}

export const Hamburger = ({ isOpen }: EventProps) => {
   const HundleNav = (el: any) => {
      el.classList.toggle("show");
   };

   useEffect(() => {
      const Ul = document.querySelector("li");
      HundleNav(Ul);
   });

   return (
      <div>
         <Wrapper>
            <div onClick={HundleNav}>
               <input type='checkbox' id='hamburger' />
               <label htmlFor='hamburger' className='hamburger'>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
               </label>
            </div>
            <ul>
               <li>
                  <a href=''>home</a>
               </li>
            </ul>
         </Wrapper>
      </div>
   );
};
