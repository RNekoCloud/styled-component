import { Buttons } from "./Buttons";
import { useState } from "react";

export const Event = () => {
   const [value, setValue] = useState(0);

   const AddValue = () => {
      setValue(value + 1);
   };

   const MinValue = () => {
      setValue(value - 1);
   };

   return (
      <>
         <p>{value}</p>
         <Buttons Click={AddValue} text='Tambah' />
         <Buttons Click={MinValue} text='Kurangi' />
      </>
   );
};
