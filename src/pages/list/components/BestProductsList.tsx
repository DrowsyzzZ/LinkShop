import Image from "next/image";
import { Product } from "@/types/linkshopType";

interface BestProductsListProps {
  products: Product[];
}
const BestProductsList = ({ products }: BestProductsListProps) => {
  return (
    <div className="flex gap-3">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="h-[95px] w-[95px] overflow-hidden rounded-[15px]"
        >
          <Image
            src={product.imageUrl}
            width={95}
            height={95}
            priority
            alt={`${index} 대표 상품`}
            style={{ objectFit: "cover", width: 95, height: 95 }}
          />
        </div>
      ))}
    </div>
  );
};

export default BestProductsList;
