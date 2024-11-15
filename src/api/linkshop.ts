import { GetLinkshops } from "@/types/linkshopType";
import instance from "./axios";

interface GetLinkshopsQuery {
  keyword?: string;
  orderBy: "recent" | "likes" | "productsCount";
  cursor?: number;
}

export const getLinkshops = async (
  query: GetLinkshopsQuery = { orderBy: "recent" },
): Promise<GetLinkshops | undefined> => {
  const { keyword = "", orderBy = "recent", cursor } = query;

  const params = new URLSearchParams();

  if (keyword) params.append("keyword", keyword);
  params.append("orderBy", orderBy);
  if (cursor !== undefined) params.append("cursor", cursor.toString());

  try {
    const res = await instance.get(`/linkshops?${params.toString()}`);
    return res.data;
  } catch (err) {
    console.error("링크샵 목록을 불러오지 못했습니다.", err);
    throw new Error("링크샵 데이터를 가져오는 데 실패했습니다.");
  }
};
