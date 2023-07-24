import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5% 0%;
   flex-direction: column;
   .greeting-container {
      padding: 0 3%;
   }
   form {
      display: flex;
      flex-direction: column;
      gap: 15px;
   }
   form > .input-email {
      align-items: start;
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 22em;
   }
   form > .input-email > label {
      font-family: Roboto, "sans";
   }
   form > .input-email > input {
      padding: 1em;
      width: 24em;
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
      width: 24em;
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
   padding: 1em 0 0 0;
   width: 100%;
   text-align: center;
   border-bottom: 1px solid #cfdfe2;
   line-height: 0.1em;
   margin: 10px 0 20px;
   span {
      background: #fff;
      padding: 0 13px;
      color: #294957;
   }
`;
