import { Buttons } from "./Buttons";
import { useState, useEffect } from "react";

type Todo = {
   id: number;
   label: string;
};

export const Event2 = () => {
   //state untuk menyimpan nilai input dari pengguna
   const [value, setInputValue] = useState("");

   //state untuk menyimpan daftar todo
   const [todos, setTodos] = useState<Todo[]>([]);

   //fungsi untuk mendapatkan daftar todo dari cookies
   const getTodosFromCookies = (): Todo[] => {
      const cookieData = document.cookie;
      if (cookieData) {
         const todosData = JSON.parse(cookieData);
         return todosData;
      } else {
         return [];
      }
   };

   //fungsi untuk menyimpan daftar todo ke dalam cookies
   const saveTodosToCookies = (todos: Todo[]) => {
      document.cookie = JSON.stringify(todos);
   };

   useEffect(() => {
      //Ketika komponen dimuat, kita akan mendapatkan daftar todo dari cookies (jika ada)
      const todosFromCookies = getTodosFromCookies();
      setTodos(todosFromCookies);
   }, []);

   //event handler ketika nilai input berubah
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
   };

   //event handler saat tombol Add diklik
   const AddTodo = () => {
      if (value.trim() !== "") {
         // membuat objek todo baru
         const newTodo: Todo = {
            id: new Date().getTime(), //menggunakan timestamp sebagai id
            label: value.trim(),
         };

         //menambahkan objek todo baru ke daftar todos dengan menggabungkan array menggunakan spread operator
         setTodos([...todos, newTodo]);

         //mengatur nilai input menjadi kosong setelah todo ditambahkan
         setInputValue("");

         //menyimpan daftar todo ke dalam cookies setelah ada perubahan pada daftar todos
         saveTodosToCookies([...todos, newTodo]);
      }
   };

   //fungsi untuk menghapus todo yang ditambahkan
   const deleteTodo = (id: number) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);

      //menyimpan daftar todo yang telah diperbarui ke dalam cookies setelah ada perubahan pada daftar todos
      saveTodosToCookies(updatedTodos);
   };

   return (
      <div>
         <h1>TodoList</h1>
         <div>
            {/* untuk memasukkan input */}
            {/* gunakan onChange untuk menangani perubahan pada elemen input */}
            <input type='text' value={value} onChange={handleInputChange} />
            {/* Tombol untuk menambahkan Todo */}
            <Buttons Click={AddTodo} label='Tambah' />
         </div>
         <ul>
            {/* Menampilkan daftar tugas yang telah ditambahkan */}
            {todos.map((todo) => (
               <li key={todo.id}>
                  <span>{todo.label}</span>
                  <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
               </li>
            ))}
         </ul>
      </div>
   );
};
