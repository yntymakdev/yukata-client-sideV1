import { SITE_NAME } from "@/constants/seo.constants";

export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  favorites: string;
  order: IOrder[];
  store: IStore[];
}
