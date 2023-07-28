import { Wrapper } from "./Hamburger.style";

interface EventProps {
   isOpen: boolean;
}

export const Hamburger = ({ isOpen }: EventProps) => {
   return (
      <div>
         <Wrapper>
            <div>
               <input type='checkbox' id='hamburger' />
               <label htmlFor='hamburger' className='hamburger'>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
               </label>
            </div>
         </Wrapper>
      </div>
   );
};
