import { Container } from "./Login.style";
import { Form } from "./Login.style";
import Google from "../../../public/img/google.svg";

export const Login = () => {
   return (
      <Container>
         <div className='items-container1'>
            <h1>Daftar</h1>
            <p>
               Sudah punya? <a href='/'>Masuk</a>{" "}
            </p>
         </div>
         <div className='items-container2'>
            <img src={Google} alt='google' />
         </div>
         <Form>
            <div className='input-container1'>
               <label htmlFor='email'>Email</label>
               <input type='email' id='email' placeholder='example@gmail.com' />
            </div>
            <div className='input-container2'>
               <label htmlFor='pw'>Kata Sandi</label>
               <input type='password' id='pw' placeholder='*******' />
            </div>
         </Form>
      </Container>
   );
};
