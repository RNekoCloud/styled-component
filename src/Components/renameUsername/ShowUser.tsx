import { useState } from "react";
import { UserList } from "./UserList";
import { User } from "./UserList";

export const ShowUser = () => {
   const [users, setUsers] = useState<User[]>([
      { id: 1, userName: "User1" },
      { id: 2, userName: "User2" },
      { id: 3, userName: "User3" },
   ]);

   const handleEditUser = (id: number, newUsername: string) => {
      setUsers((prevUsers) =>
         prevUsers.map((user) =>
            user.id === id ? { ...user, userName: newUsername } : user
         )
      );
   };

   const handleDeleteUser = (id: number) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
   };

   return (
      <div>
         <h1>React User Management</h1>
         <UserList
            users={users}
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
         />
      </div>
   );
};
