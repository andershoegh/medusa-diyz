import ProductCard, { Product } from "../components/Product/ProductCard";

const productList: Product[] = [
  {
    price: "50",
    productName: "Blue dice",
  },
  {
    price: "100",
    productName: "Blue dice",
  },
  {
    price: "150",
    productName: "Blue dice",
  },
  {
    price: "200",
    productName: "Blue dice",
  },
];

const Products = () => {
  return (
    <div className="w-full grid gap-4 grid-cols-3">
      {productList.map((product) => {
        return (
          <ProductCard
            price={product.price}
            productName={product.productName}
          />
        );
      })}
    </div>
  );
};

export default Products;
