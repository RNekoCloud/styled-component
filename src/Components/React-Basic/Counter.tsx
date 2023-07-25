//import useState dan useEffect dari react
import { useState, useEffect } from "react";
//import konfigurasi local storage yang telah dibuat
//setidaknya harus membuat konfigurasi untuk menyimpan ke local storage dan konfigurasi untuk membaca nilai yang disimopan
import { ToLocalStorage, GetFromLocaleStorage } from "../utils/localStorage";

export const Counter = () => {
   //buat state untuk menyimpan nilai angka penghitung
   const [value, setValue] = useState<number>(0);

   //ketika komponen dipasang, coba ambil angka dari local storage
   useEffect(() => {
      const GetValue = GetFromLocaleStorage("nilai");

      if (GetValue !== null) {
         setValue(GetValue);
      }
   });

   //fungsi untuk menambah angka dan menyimpannya di local storage
   const AddValue = () => {
      //simpan nilai kesebuah variable
      const ItemValue = value + 1;
      //jadikan sebagai nilai state
      setValue(ItemValue);
      //simpan nilai ke local storage
      ToLocalStorage("nilai", ItemValue);
   };

   //fungsi untuk mengurangi angka dan menyimpannya di local storage
   const MinValue = () => {
      //simpan nilai ke variable
      //jadikan sebagai nilai state
      const ItemValue = value - 1;
      setValue(ItemValue);
      //simpan nilai ke local storage
      ToLocalStorage("nilai", ItemValue);
   };

   return (
      <div>
         <h1>Counter App</h1>
         <p>{value}</p>
         <button onClick={AddValue}>Tambah</button>
         <button onClick={MinValue}>kurangi</button>
      </div>
   );
};
