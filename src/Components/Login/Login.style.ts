import styled from "styled-components";

export const Container = styled.div`
display: flex;
height: 100vh;
padding: 0 20px;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 15px;
.items-container1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 15px;
    gap:15px;
    h1{
        margin: 0;
        padding:0
     }
    p{
        margin: 0;
        padding:0;
        a {
        color:blue;
        text-decoration: none;
     }
    }
}

.items-container2{
    background-color: white;
}
`;

export const Form = styled.form`
 background-color:red;
`;
