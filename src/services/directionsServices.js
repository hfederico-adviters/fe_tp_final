import { fetchContentDirections } from "../utils/fetchCustomDIrections";
export const getProvince = async () => {
  try {
    return await fetchContentDirections("/provincias");
  } catch (error) {
    throw new Error("[getProvince service error]: " + error);
  }
};
export const getLocalities = async (id) => {
  try {
    return await fetchContentDirections(`/localidades?provincia=${id}`);
  } catch (error) {
    throw new Error("[getLocalities service error]: " + error);
  }
};
