import React from "react";

export type Product = {
  productName: string;
  price: string;
};

const ProductCard = ({ price, productName }: Product) => {
  return (
    <div className="h-60 flex justify-center items-center rounded-md bg-gray-100">
      <div>{price}</div>
      <div>{productName}</div>
    </div>
  );
};

export default ProductCard;
