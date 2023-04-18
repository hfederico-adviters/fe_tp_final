import { fetchContent } from "../utils/fetchContent";

export const postAddUser = async (body) => {
  console.log(body);
  try {
    return await fetchContent("/user/add/" ,{ body, method: "POST" });
  } catch (error) {
    throw new Error("[postAddUser service error]: " + error);
  }
};

