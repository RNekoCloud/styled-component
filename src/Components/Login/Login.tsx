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
         <Form>j</Form>
      </Container>
   );
};
