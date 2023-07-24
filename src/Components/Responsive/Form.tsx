import { Wrapper } from "./Index.style";
import MobileImage from "../../../public/img/Login-Art(mobile).svg";

export const Form = () => {
   return (
      <Wrapper>
         <div className='img-container'>
            <img src={MobileImage} alt='' />
         </div>
      </Wrapper>
   );
};
