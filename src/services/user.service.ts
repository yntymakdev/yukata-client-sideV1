class UserService {
  async getProfile() {
    const { data } = await axiosWithAuth<IUser>({
      url: API_URL.users("/profile"),
      method: "GET",
    });

    return data;
  }
}
