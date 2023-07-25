import { Buttons } from "./Buttons";
import { useState } from "react";

export const Event = () => {
   const [value, setValue] = useState("Ini kalimat pertama");

   const AddValue = () => {
      setValue("Yeyy, Kamu sudah mengeklik ini");
   };

   return (
      <>
         <p>{value}</p>
         <Buttons Click={AddValue} label='Click Me!' />
      </>
   );
};
