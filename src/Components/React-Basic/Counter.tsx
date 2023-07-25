// src/components/Counter.tsx

import React, { useState, useEffect } from "react";
import {
   getItemFromLocalStorage,
   setItemToLocalStorage,
} from "../utils/localStorage";

const Counter: React.FC = () => {
   const [count, setCount] = useState<number>(0);

   useEffect(() => {
      // Ketika komponen dipasang, coba ambil angka dari local storage
      const storedCount = getItemFromLocalStorage("count");
      if (storedCount !== null) {
         setCount(storedCount);
      }
   }, []);

   const handleIncrement = () => {
      const newCount = count + 1;
      setCount(newCount);
      setItemToLocalStorage("count", newCount);
   };

   const handleDecrement = () => {
      const newCount = count - 1;
      setCount(newCount);
      setItemToLocalStorage("count", newCount);
   };

   return (
      <div>
         <h1>Counter</h1>
         <p>{count}</p>
         <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>Decrement</button>
      </div>
   );
};

export default Counter;
