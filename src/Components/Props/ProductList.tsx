import React from "react";
import ProductItem from "./ProductItem";

interface Product {
   name: string;
   price: number;
   description: string;
}

interface ProductListProps {
   products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
   return (
      <div>
         <h2>Daftar Produk</h2>
         <ul>
            {products.map((product, index) => (
               <ProductItem key={index} product={product} />
            ))}
         </ul>
      </div>
   );
};

export default ProductList;
