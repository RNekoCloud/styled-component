// import { HelloWorld } from "./Components/styledComponent/HelloWorld";
// import { Login } from "./Components/Login/Login";
// import { Form } from "./Components/Responsive/Form";
// import { Counter } from "./Components/React-Basic/Counter";
import TodoList from "./Components/React-Basic/TodoList";
export const App = () => {
   const products = [
      {
         name: "Produk 1",
         price: 10,
         description: "Deskripsi Produk 1",
      },
      {
         name: "Produk 2",
         price: 20,
         description: "Deskripsi Produk 2",
      },
      {
         name: "Produk 3",
         price: 30,
         description: "Deskripsi Produk 3",
      },
   ];
   return (
      <div>
         {/* <HelloWorld /> */}
         {/* <Login /> */}
         <TodoList />
      </div>
   );
};
