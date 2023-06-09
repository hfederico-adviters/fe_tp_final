import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const httpClient = axios.create({
  baseURL: "http://172.12.50.31:8765/api/v1/",
});
export const Method = {
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  POST: "POST",
  DELETE: "DELETE",
};
export const fetchContent = async (url, config = {}) => {
  try {
    const { headers: headersOptions } = config;
    const token = localStorage.getItem("Token");
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          ...headersOptions,
        }
      : {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json",
          ...headersOptions,
        };

    const { body, ...options } = config;
    const source = axios.CancelToken.source();
    const request = {
      cancelToken: source.token,
      method: Method.GET,
      headers,
      ...options,
      url,
    };
    if (body) {
      request.data = body;
    }
    const promise = httpClient.request(request);
    promise.cancel = () => source.cancel("cancelled");
    const { data } = await promise;
    if (data?.error) {
      throw new Error(data.error);
    }
    return camelcaseKeys(data, { deep: true });
  } catch (error) {
    console.info(error);
    throw error;
  }
};
