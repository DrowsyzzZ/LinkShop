import Image from "next/image";

interface LinkshopInfoProps {
  ImageURL: string;
  name: string;
  userId: string;
}

const LinkshopInfo = ({ ImageURL, name, userId }: LinkshopInfoProps) => {
  return (
    <div className="flex items-center gap-[15px]">
      <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
        <Image
          src={ImageURL}
          width={60}
          height={60}
          alt="Shop Image"
          style={{ objectFit: "cover", width: 60, height: 60 }}
        />
      </div>

      <div className="flex flex-col gap-[7px]">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-gray200 text-16pt">@{userId}</p>
      </div>
    </div>
  );
};

export default LinkshopInfo;
