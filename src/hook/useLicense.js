import { useQuery } from "react-query";
import {
  getLicense,
  getLicenseDetails,
  getListTypeLicense,
} from "../services/licenseService";
export const useLicense = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useLicense"],
    async () => {
      return getLicense();
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export const useLicenseDetails = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    [`useLicenseDetails${id}`],
    async () => {
      if (Number(id) > 0) {
        return getLicenseDetails(id);
      }
      return {};
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export const useTypeLicense = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useTypeLicense"],
    async () => {
      return getListTypeLicense();
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
