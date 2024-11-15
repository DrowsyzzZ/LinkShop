import LinkCard from "./components/LinkCard";
import SearchBar from "./components/SearchBar";
import { GetServerSideProps } from "next";
import { getLinkshops } from "@/api/linkshop";
import { Linkshop } from "@/types/linkshopType";

interface ListPageProps {
  initialData: Linkshop[];
  cursor: number | null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getLinkshops();

  if (!res?.list) return { notFound: true };
  if (!res?.nextCursor) return { notFound: true };

  return {
    props: {
      initialData: res.list,
      cursor: res.nextCursor,
    },
  };
};

const ListPage = ({ initialData, cursor }: ListPageProps) => {
  console.log("data: ", initialData);
  return (
    <div>
      <SearchBar />
      <p className="mb-8 mt-10 font-medium Tablet:my-[28px] Mobile:my-[20px]">
        상세필터
      </p>
      <div className="grid grid-cols-1 gap-6 PC:grid-cols-2 Tablet:gap-4 Mobile:gap-2">
        {initialData.map((list) => (
          <LinkCard key={list.id} info={list} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;
