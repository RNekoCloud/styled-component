import { useState } from "react";

export interface User {
   id: number;
   userName: string;
}

interface UserListProps {
   users: User[];
   onEditUser: (id: number, newUsername: string) => void;
   onDeleteUser: (id: number) => void;
}

export const UserList = ({
   users,
   onEditUser,
   onDeleteUser,
}: UserListProps) => {
   const [editingUserId, setEditingUserId] = useState<number | null>(null);
   const [newUserName, setNewUserName] = useState("");

   const handleEditClick = (id: number, username: string) => {
      setEditingUserId(id);
      setNewUserName(username);
   };

   const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewUserName(e.target.value);
   };

   const handleEditSubmit = (id: number) => {
      onEditUser(id, newUserName);
      setEditingUserId(null);
      setNewUserName("");
   };

   return (
      <div>
         <h2>User List</h2>
         <ul>
            {users.map((user) => (
               <li key={user.id}>
                  {editingUserId === user.id ? (
                     <div>
                        <input
                           type='text'
                           value={newUserName}
                           onChange={handleEditChange}
                        />
                        <button onClick={() => handleEditSubmit(user.id)}>
                           Update
                        </button>
                     </div>
                  ) : (
                     <div>
                        {user.userName}
                        <button
                           onClick={() =>
                              handleEditClick(user.id, user.userName)
                           }
                        >
                           Edit
                        </button>
                        <button onClick={() => onDeleteUser(user.id)}>
                           Delete
                        </button>
                     </div>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
};
