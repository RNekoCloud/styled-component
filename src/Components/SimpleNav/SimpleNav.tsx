import { useState } from "react";

export const SimpleNav = () => {
   const [isopen, setIsOpen] = useState(false);

   const ToggleClick = () => {
      setIsOpen(true);
   };
   return (
      <div>
         <button onClick={ToggleClick}>Click Aku</button>
         <p>{isopen ? "Yee benar" : "kamu salah"}</p>
      </div>
   );
};
