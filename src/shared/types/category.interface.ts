export interface IColor {
  id: string;
  createdAt: string;
  description: string;
  value: string;
  storeId: string;
}

export interface ICategoryInput extends Pick<ICategory, "title" | "description"> {}
