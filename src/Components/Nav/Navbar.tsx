import { useState } from "react";
import {
   Container,
   Header,
   Logo,
   Wrapper,
   Menu,
   Auth,
   Nav,
   Drawer,
} from "./Navbar.style";
import LogoJadoo from "./../../assets/img/logo/logo-jadoo.svg";

export const Navbar = () => {
   const [drawer, setDrawer] = useState(false);

   const onDrawerClick = () => {
      const nav = document.querySelector(`.${Menu.styledComponentId}`);

      if (drawer) {
         nav.classList.remove("show");
         setDrawer(false);
      } else {
         nav.classList.add("show");
         setDrawer(true);
      }
   };

   return (
      <Header>
         <Container>
            <Wrapper>
               <Logo src={LogoJadoo} />
               <Menu>
                  <Nav>
                     <ul className='nav__list'>
                        <li className='nav__item'>
                           <a href='#'>Destinations</a>
                        </li>
                        <li className='nav__item'>
                           <a href='#'>Hotels</a>
                        </li>
                        <li className='nav__item'>
                           <a href='#'>Flights</a>
                        </li>
                        <li className='nav__item'>
                           <a href='#'>Bookings</a>
                        </li>
                     </ul>
                  </Nav>
                  <Auth>
                     <a className='login' href='#'>
                        Login
                     </a>
                     <a className='signup' href='#'>
                        Sign up
                     </a>
                  </Auth>
               </Menu>
               <Drawer>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='menu'
                     viewBox='0 0 20 20'
                     fill='currentColor'
                     onClick={() => onDrawerClick()}
                  >
                     <path
                        fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                        clipRule='evenodd'
                     />
                  </svg>
               </Drawer>
            </Wrapper>
         </Container>
      </Header>
   );
};
