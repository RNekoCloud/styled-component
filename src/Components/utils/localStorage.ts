// src/utils/localStorage.ts

export const setItemToLocalStorage = (key: string, value: any) => {
   localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key: string) => {
   const item = localStorage.getItem(key);
   return item ? JSON.parse(item) : null;
};
