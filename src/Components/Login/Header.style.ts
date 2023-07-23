import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: #0d4a3e;
   padding: 1em 5em;
   margin: 0;
   width: 30%;
   height: 100vh;
   display: flex;
   flex-direction: column;
`;

export const Title = styled.div`
   gap: 13px;
   color: white;
   display: flex;
   align-items: center;
`;

export const Text1 = styled.div`
   color: white;
   font-weight: bold;
   font-size: 3em;
   span {
      color: orange;
   }
`;

export const Text2 = styled.div`
   color: #d1d5db;
   p {
      text-align: justify;
      font-size: 1em;
   }
`;
