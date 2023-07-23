import styled from "styled-components";

export const MainContainer = styled.div`
   display: flex;
   height: 100vh;
   font-family: "Poppins";
   align-items: center;
   justify-content: space-between;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
   height: 100vh;
   align-items: center;
   justify-content: center;
   gap: 15px;
   .items-container1 {
      display: flex;
      width: 40%;
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
      width: 40%;
   }
`;

export const Hr = styled.div`
   width: 40%;
   text-align: center;
   border-bottom: 1px solid #9ca3af;
   line-height: 0.1em;
   margin: 10px 0 20px;
   span {
      background: #fff;
      padding: 0 10px;
      color: #9ca3af;
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
   .input-container1 > input:focus {
      outline: solid;
      outline-width: 1px;
      outline-color: black;
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
   .input-container2 > input:focus {
      outline: solid;
      outline-width: 1px;
      outline-color: black;
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
      background-color: rgb(240, 165, 26);
   }
   button:active {
      transform: scale(0.96);
      background-color: rgb(235, 181, 82);
   }
`;
