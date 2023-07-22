import styled from "styled-components";

export const Container = styled.div`
background-color: green;
color: white;
font-family: 'Courier New', Courier, monospace;
display: flex;
padding: 10px 20px;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const ItemsContainer = styled.div`
background-color: green;
color: white;
font-family: 'Courier New', Courier, monospace;
display: flex;
gap: 6px;
padding: 0 20px;
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const Title = styled.h1`
font-size: 40px;
font-weight: 900`;

export const Paragraph = styled.p`
font-size: 20px;
`;

export const Button1 = styled.button`
background-color: red;
border: 2px solid black;
border-radius: 10px;
color: white;
font-weight: bold;
padding: 10px 15px;

&:hover{
    background-color: rgb(240, 170, 170);
    transform: scale(0.96);
    color: black;
}
`;

export const Button2 = styled.button`
background-color: white;
border: 2px solid black;
border-radius: 10px;
color: black;
font-weight: bold;
padding: 10px 15px;
&:hover{
    background-color: red;
    transform: scale(0.96);
    color: white;
}
`;
