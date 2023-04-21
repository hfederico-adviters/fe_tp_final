import { useQuery } from "react-query";

import { getLocalities, getProvince } from "../services/directionsServices";

export const useProvince = () => {
  const { data, isLoading, isError, error } = useQuery(
    ["useProvince"],
    async () => {
      return getProvince();
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
export const useLocatities = (id) => {
  const { data, isLoading, isError, error } = useQuery(
    ["useLocatities"],
    async () => {
      return getLocalities(id);
    }
  );
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
// export const useIntegrantes = (id) => {
//   console.log(id);
//   const { data, isLoading, isError, error } = useQuery(
//     ["useIntegrantes" + id],
//     async () => {
//       if (id) {
//         return getIntegrantes(id);
//       }
//       return [];
//     }
//   );
//   return {
//     data,
//     isLoading,
//     isError,
//     error,
//   };
// };
