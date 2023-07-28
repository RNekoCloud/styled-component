import { Wrapper } from "./Hamburger.style";

export const Hamburger = () => {
   return (
      <div>
         <Wrapper>
            <input type='checkbox' id='hamburger' />
            <label htmlFor='hamburger' className='hamburger'>
               <span className='line'></span>
               <span className='line'></span>
               <span className='line'></span>
            </label>
         </Wrapper>
      </div>
   );
};
