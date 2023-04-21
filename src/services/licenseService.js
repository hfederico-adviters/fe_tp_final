import { fetchContent } from "../utils/fetchContent";
export const getLicense = async () => {
  try {
    return await fetchContent("/licence/");
  } catch (error) {
    throw new Error("[getUser service error]: " + error);
  }
};
export const getLicenseDetails = async (id) => {
  try {
    return await fetchContent(`/licence/${id}`);
  } catch (error) {
    throw new Error("[getLicenseDetails service error]: " + error);
  }
};

export const getListTypeLicense = async () => {
  try {
    return await fetchContent("/licenceType/");
  } catch (error) {
    throw new Error("[getListTypeLicense service error]: " + error);
  }
};
export const postLicense = async (body) => {
  try {
    return await fetchContent("/licence/add", { body, method: "POST" });
  } catch (error) {
    throw new Error("[postAddUser service error]: " + error);
  }
};

export const putLicense = async (id, body) => {
  try {
    return await fetchContent(`licence/update/${id}`, { body, method: "PUT" });
  } catch (error) {
    throw new Error("[putUser service error]: " + error);
  }
};
