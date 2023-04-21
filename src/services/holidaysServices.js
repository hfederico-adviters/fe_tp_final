import { fetchContent } from "../utils/fetchContent";

export const postHolidays = async (body, setRefreshHolidays) => {
  try {
    const response = await fetchContent("/holidays/", { body, method: "POST" }).then(() => {setRefreshHolidays(true)});
    console.log(response);
     // Actualiza la lista de holidays
  } catch (error) {
    throw new Error("[postHolidays service error]: " + error);
  }
};

export const getHolidays = async (setHolidays) => {
  try {
    const response = await fetchContent("/holidays/", {method: "GET" });
    console.log(response);
    setHolidays(response);
  } catch (error) {
    throw new Error("[getHolidays service error]: " + error);
  }
};