import { Linkshop } from "@/types/linkshopType";
import LinkshopInfo from "./LinkshopInfo";
import BestProductsList from "./BestProductsList";
import LikesCount from "./LikesCount";

export interface LinkCardProps {
  info: Linkshop;
}

const LinkCard = ({ info }: LinkCardProps) => {
  return (
    <section className="bg-white100 relative flex flex-col gap-2 rounded-[25px] p-6">
      <LinkshopInfo
        ImageURL={info.shop.imageUrl}
        name={info.name}
        userId={info.userId}
      />
      <p className="text-15pt font-medium">대표 상품 {info.productsCount}</p>
      <BestProductsList products={info.products} />
      <LikesCount likes={info.likes} />
    </section>
  );
};

export default LinkCard;
