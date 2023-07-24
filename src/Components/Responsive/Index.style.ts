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
