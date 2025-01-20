import { IProduct } from "./product.interface";
import { IStore } from "./store.interface";

export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string;
  favorites: IProduct[];
  order: IOrder[];
  store: IStore[];
}
