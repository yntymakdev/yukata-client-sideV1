import { axiosClassic } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IProduct } from "@/shared/types/product.interface";

class ProductService {
  async getAll(searchTerm?: string | null) {
    const { data } = await axiosClassic<IProduct[]>({
      url: API_URL.products(),
      method: "GET",
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return data || [];
  }
}
