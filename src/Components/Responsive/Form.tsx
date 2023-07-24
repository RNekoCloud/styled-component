import { Wrapper } from "./Index.style";
import MobileImage from "../../../public/img/Login-Art(mobile).svg";

export const Form = () => {
   return (
      <Wrapper>
         <div className='img-container'>
            <img src={MobileImage} alt='' />
         </div>
         <div className='greeting-container'>
            <h2>Welcome Back 👋</h2>
            <p>
               Today is a new day. It's your day. You shape it. Sign in to start
               managing your projects.
            </p>
         </div>
         <form>
            <div className='input-email'>
               <label htmlFor='email'>Email</label>
               <input type='email' id='email' placeholder='Example@gmail.com' />
            </div>
            <div></div>
         </form>
      </Wrapper>
   );
};
