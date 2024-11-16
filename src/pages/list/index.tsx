import LinkCard from "./components/LinkCard";
import SearchBar from "./components/SearchBar";
import { GetServerSideProps } from "next";
import { getLinkshops } from "@/api/linkshop";
import { GetLinkshops } from "@/types/linkshopType";
import { useQuery } from "@tanstack/react-query";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getLinkshops();

  return {
    props: res,
  };
};

const ListPage = (initialData: GetLinkshops) => {
  const { data } = useQuery({
    queryKey: ["getLinkshops", { orderBy: "recent" }],
    queryFn: () => getLinkshops({ orderBy: "recent" }),
    initialData,
    staleTime: 60 * 1000 * 60,
  });

  const linkshopLists = data?.list || [];
  const cursor = data?.nextCursor || null;

  return (
    <div className="mb-[65px] mt-8 Mobile:mt-11">
      <SearchBar />
      <p className="mb-8 mt-10 font-medium Tablet:my-[28px] Mobile:my-[20px]">
        상세필터
      </p>
      <div className="grid grid-cols-1 gap-6 PC:grid-cols-2 Tablet:gap-4 Mobile:gap-2">
        {linkshopLists.map((list) => (
          <LinkCard key={list.id} info={list} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
