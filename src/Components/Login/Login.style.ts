import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   justify-content: center;
   align-items: center;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 15px;
   .items-container1 {
      display: flex;
      align-items: start;
      flex-direction: column;
      gap: 15px;
      h1 {
         margin: 0;
         padding: 0;
      }
      p {
         margin: 0;
         padding: 0;
         a {
            color: blue;
            text-decoration: none;
         }
         a:hover {
            text-decoration: underline;
         }
      }
   }

   .items-container2 {
      background-color: white;
   }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 25px;
   .input-container1 {
      display: flex;
      font-weight: bold;
      gap: 4px;
      flex-direction: column;
   }
   .input-container1 > input {
      border: 2px solid black;
      width: 20em;
      padding: 10px 5px;
      border-radius: 5px;
   }

   .input-container2 {
      display: flex;
      gap: 4px;
      font-weight: bold;
      flex-direction: column;
   }
   .input-container2 > input {
      border: 2px solid black;
      padding: 10px 0 8px 5px;
      border-radius: 5px;
   }
   button {
      width: 7em;
      padding: 10px 0;
      font-weight: bold;
      border: none;
      color: white;
      background-color: orange;
      border-radius: 2px;
   }
   button:hover {
      background-color: rgb(243, 176, 53);
   }
`;
