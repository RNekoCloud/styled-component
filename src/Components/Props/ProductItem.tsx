import React from "react";

interface Product {
   name: string;
   price: number;
   description: string;
}

interface ProductItemProps {
   product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
   return (
      <li>
         <h3>{product.name}</h3>
         <p>Harga: ${product.price}</p>
         <p>{product.description}</p>
      </li>
   );
};

export default ProductItem;
