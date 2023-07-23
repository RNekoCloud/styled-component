import { MainContainer } from "./Login.style";
import { Container } from "./Login.style";
import { Form } from "./Login.style";
import { Header } from "./Header";
import Google from "../../../public/img/google.svg";

export const Login = () => {
   return (
      <MainContainer>
         <Header />
         <Container>
            <div className='items-container1'>
               <h1>Daftar</h1>
               <p>
                  Sudah punya akun? <a href='/'>Masuk</a>{" "}
               </p>
            </div>
            <div className='items-container2'>
               <img src={Google} alt='google' />
            </div>
            <Form>
               <div className='input-container1'>
                  <label htmlFor='email'>Email</label>
                  <input
                     type='email'
                     id='email'
                     placeholder='example@gmail.com'
                  />
               </div>
               <div className='input-container2'>
                  <label htmlFor='pw'>Kata Sandi</label>
                  <input type='password' id='pw' placeholder='*******' />
               </div>
               <button>Daftar</button>
            </Form>
         </Container>
      </MainContainer>
   );
};
