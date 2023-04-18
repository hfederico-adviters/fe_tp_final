import { useQuery } from "react-query";
import { getUser, getUserDetails } from "../services/usuariosServices";

export const useUser = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useUser"],
    async () => {
      return getUser();
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export const useUserDetails = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    ["useUserDetails"],
    async () => {
      return getUserDetails(id);
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
