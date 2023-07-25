//fungsi untuk menyimpan data ke local storage
//buat 2 parameter yang memuat key dan value
export const ToLocalStorage = (key: string, value: number) => {
   //simpan kedua paramater ke local storage
   //karena tipe data yang ingin disimpan tidak berbentuk string, maka gunakan JSON.strigify untuk mengubahnya ke string
   localStorage.setItem(key, JSON.stringify(value));
};

//fungsi untuk mengambil data dari local storage
export const GetFromLocaleStorage = (key: string) => {
   //buat konfigurasi agar dapat membaca nilai yang disimpan di local storage
   const GetKey = localStorage.getItem(key);
   //gunakan JSON.parse() untuk mengubahnya kembali ke bentuk objek
   return GetKey ? JSON.parse(GetKey) : null;
};

//local storage hanya dapat menyimpan string sehingga jika ada nilai non string, kita perlu mengubahnya ke string dengan menggunakan function 'JSON.stringify()', dan jika kita ingin mengambil nilai yang disimpan di local storage maka kita harus menggunakan 'JSON.parse()' untuk mengubahnya ke tipe data objek atau tipe data yang sesuai
