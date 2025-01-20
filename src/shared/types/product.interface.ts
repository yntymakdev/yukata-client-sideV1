import { ICategory } from "./category.interface";
import { IColor } from "./color.interface";
import { IReview } from "./review.inerface";
import { IStore } from "./store.interface";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: ICategory;
  reviews: IReview[];
  color: IColor;
  store: IStore;
}

export interface IProductInput extends Omit<IProduct, "id" | "reviews" | "store" | "category" | "color  "> {
  categoryId: string;
  colorId: string;
}
