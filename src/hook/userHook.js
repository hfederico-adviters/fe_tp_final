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
      if (Number(id) > 0) {
        const response = await getUserDetails(id);
        return {
          ...response,
          userSupervicer: response?.userSupervicer?.id,
          userSupervicerFirstNameUser: `${response?.userSupervicer?.firstName} ${response?.userSupervicer?.lastName}`,
          userSupervicerFirstImage: response?.userSupervicer?.image,
        };
      }
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
