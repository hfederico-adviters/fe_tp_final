import { fetchContent } from "../utils/fetchContent";
export const postLogin = async (body, setUsuario) => {
  try {
    const response = await fetchContent("/user/login", { body, method: "POST" });
    setUsuario(response?.user);
    localStorage.setItem(
      "Token",
      response?.token
    );
    console.log(response);
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ingresado un email o contraseña incorrectos"
    );
    throw new Error("[getGrupos service error]: " + error);
  }
};
