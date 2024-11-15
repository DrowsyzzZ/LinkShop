interface Shop {
  id: number;
  shopUrl: string;
  urlName: string;
  imageUrl: string;
}

interface Product {
  id: number;
  imageUrl: string;
  name: string;
}

export interface Linkshop {
  id: number;
  name: string;
  userId: string;
  shop: Shop;
  likes: number;
  teamId: string;
  productsCount: number;
  products: Product[];
}

export interface GetLinkshops {
  list: Linkshop[];
  nextCursor: number | null;
}
