import LinkCard from "./components/LinkCard";
import SearchBar from "./components/SearchBar";

const ListPage = () => {
  return (
    <div>
      <SearchBar />
      <p className="mb-8 mt-10 font-medium Tablet:my-[28px] Mobile:my-[20px]">
        상세필터
      </p>
      <div className="grid grid-cols-1 gap-6 PC:grid-cols-2 Tablet:gap-4 Mobile:gap-2">
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
};

export default ListPage;
