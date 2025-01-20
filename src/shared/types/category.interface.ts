export interface ICategory {
  id: string;
  createdAt: string;
  description: string;
  value: string;
  storeId: string;
}

export interface ICategoryInput extends Pick<ICategoryInput, "title" | "description"> {}
