import { Wrapper } from "./Index.style";
import { Forgot } from "./Index.style";
import { SignIn } from "./Index.style";
import { HrText } from "./Index.style";
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
            <div className='input-password'>
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  id='password'
                  placeholder='At least 8 characters'
               />
            </div>
            <Forgot>
               <a href='/'>Forgot Password?</a>
            </Forgot>
            <SignIn>
               <button>Sign in</button>
            </SignIn>
            <HrText>
               <span>Or sign in with</span>
            </HrText>
         </form>
      </Wrapper>
   );
};
