import { async } from "q";
import { fetchContent } from "../utils/fetchContent";
export const getUser = async () => {
  console.log();
  try {
    return await fetchContent("/user/");
  } catch (error) {
    throw new Error("[getUser service error]: " + error);
  }
};

export const postAddUser = async (body) => {
  console.log(body);
  try {
    return await fetchContent("/user/update/1", { body, method: "PUT" });
  } catch (error) {
    throw new Error("[postAddUser service error]: " + error);
  }
};

export const getUserDetails = async (id) => {
  try {
    return await fetchContent(`/user/${id}`);
  } catch (error) {
    throw new Error("[getUserDetails service error]: " + error);
  }
};

export const getUserDelete = async (id) => {
  try {
    return await fetchContent(`/user/delete/${id}`, { method: "DELETE" });
  } catch (error) {
    throw new Error("[getUserDetails service error]: " + error);
  }
};
