import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 5% 4%;
   flex-direction: column;
   .greeting-container {
      padding: 5% 4%;
      width: 21rem;
      text-align: justify;
   }
   form {
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
   form > .input-email {
      padding: 0 2%;
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 5px;
   }
   form > .input-email > label {
      font-family: Roboto, "sans";
   }
   form > .input-email > input {
      padding: 1em;
      width: 19rem;
      border-radius: 0.5em;
      border: 1px solid #d4d7e3;
      background: #f3f7fb;
   }
   form > .input-email > input::placeholder {
      color: #16181b;
      font-weight: 500;
      font-family: Roboto;
   }
   form > .input-password {
      align-items: start;
      padding: 0 2%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 22em;
   }
   form > .input-password > label {
      font-family: Roboto, "sans";
   }
   form > .input-password > input {
      padding: 1em;
      width: 19rem;
      border-radius: 0.5em;
      border: 1px solid #d4d7e3;
      background: #f3f7fb;
   }
   form > .input-password > input::placeholder {
      color: #16181b;
      font-weight: 500;
      font-family: Roboto;
   }
`;

export const Forgot = styled.div`
   display: flex;
   justify-content: end;
   padding: 0 3%;
   a {
      font-size: 1em;
      font-family: Roboto, "sans";
      color: #1e4ae9;
      text-decoration: none;
   }
   a:hover {
      text-decoration: underline;
   }
`;

export const SignIn = styled.div`
   padding: 0 2%;
   button {
      background-color: #162d3a;
      color: #ffffff;
      font-size: 1em;
      border: none;
      border-radius: 0.75em;
      padding: 1em 0;
      width: 100%;
      display: flex;
      justify-content: center;
   }
   button:hover {
      background-color: #304d5f;
   }
   button:active {
      background-color: #41657c;
      transform: scale(0.96);
   }
`;

export const HrText = styled.div`
   padding: 2em 0 0 0;
   width: 20rem;
   text-align: center;
   border-bottom: 1px solid #cfdfe2;
   line-height: 0.1em;
   margin: 0 4%;
   span {
      background: #fff;
      padding: 0 13px;
      color: #294957;
   }
`;

export const Login = styled.div`
   display: flex;
   justify-content: center;
   gap: 10px;
   padding: 5% 2% 0 2%;
   .button1 {
      border: none;
      background-color: #d1edf3;
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      width: 10rem;
      font-family: Roboto, "sans";
      border-radius: 0.75em;
      padding: 0.6em 2em;
      font-size: 1em;
   }
   .button1:hover {
      background-color: #cfe5e9;
   }
   .button1:active {
      background-color: #e2f2f5;
      transform: scale(0.96);
   }
   .button2 {
      border: none;
      background-color: #d1edf3;
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
      width: 10rem;
      font-family: Roboto, "sans";
      border-radius: 0.75em;
      padding: 0.6em 2em;
      font-size: 1em;
   }
   .button2:hover {
      background-color: #cfe5e9;
   }
   .button2:active {
      background-color: #e2f2f5;
      transform: scale(0.96);
   }
`;

export const SignUp = styled.div`
   display: flex;
   justify-content: center;
`;
