import ProductCard from "./ProductCard";
import { ProductCardData } from "../util/contants";

function Products() {
  return (
    <div className="flex justify-between">
      {
      ProductCardData.map(item => (
        <ProductCard key={item.id} {...item}/>
      ))
      }
    </div>
  );
}

export default Products;
