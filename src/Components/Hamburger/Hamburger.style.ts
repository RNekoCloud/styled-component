import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: #fff;
   display: flex;
   justify-content: right;
   padding: 2rem;
   #hamburger {
      display: none;
   }
   .hamburger {
      display: block;
      background-color: red;
      width: 40px;
      height: 60px;
      position: relative;
      cursor: pointer;
   }
   .line {
      position: absolute;
      height: 6px;
      width: 100%;
      background-color: #000;
      transition: 0.5s;
   }
   .line:nth-child(1) {
      top: 12px;
   }
   .line:nth-child(2) {
      top: 24px;
   }
   .line:nth-child(3) {
      top: 36px;
   }
   #hamburger:checked + .hamburger .line:nth-child(1) {
      transform: translateY(12px) rotate(-45deg);
   }
   #hamburger:checked + .hamburger .line:nth-child(2) {
      opacity: 0;
   }

   #hamburger:checked + .hamburger .line:nth-child(3) {
      transform: translateY(-12px) rotate(45deg);
   }
`;

/*
#hamburger:checked + .hamburger .line:nth-child(1){
   transform: translateY(12px) rotate(-45deg);
}

#hamburger:checked + .hamburger .line:nth-child(2){
   opacity:0;
}

#hamburger:checked + .hamburger .line:nth-child(3){
   transform: translateY(-12px) rotate(45deg);
}


label.hamburger {
   display: block;
   background: #fff;
   width: 40px; 
   height: 60px;
   position: relative;
   cursor: pointer;
}

input#hamburger {
  display:none
}

.line {
   position: absolute;
   height: 6px;
   width: 100%;
   background: #000;
   transition: 0.5s;
}

.line:nth-child(1) { top: 12px; }
.line:nth-child(2) { top: 24px; }
.line:nth-child(3) { top: 36px; }


*/
