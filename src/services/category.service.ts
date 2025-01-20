import { axiosClassic, axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { ICategory } from "@/shared/types/category.interface";

class CategoryService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<ICategory[]>({
      url: API_URL.categories(`/by-storeId/${id}`),
      method: "GET",
    });

    return data;
  }

  async getById(id: string) {
    const { data } = await axiosClassic<ICategory>({
      url: API_URL.categories(`/by-id/${id}`),
      method: "GET",
    });

    return data;
  }
}
