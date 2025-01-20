import { axiosWithAuth } from "@/api/api.interceptors";
import { API_URL } from "@/config/api.config";
import { IColor } from "@/shared/types/color.interface";

class ColorService {
  async getByStoreId(id: string) {
    const { data } = await axiosWithAuth<IColor[]>({
      url: API_URL.colors(`/by-storeId/${id}`),
      method: "GET",
    });

    return data || [];
  }
  async getById(id: string) {
    const { data } = await axiosWithAuth<IColor>({
      url: API_URL.colors(`/by-id/${id}`),
      method: "GET",
    });

    return data;
  }
}
