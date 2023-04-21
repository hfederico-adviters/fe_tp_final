import { fetchContent } from "../utils/fetchContent";
export const postLogin = async (body, setUsuario) => {
  try {
    const response = await fetchContent("/user/login", {
      body,
      method: "POST",
    });
    console.log(response);
    setUsuario({
      id: response?.user?.id,
      usuario: response?.user?.firstName,
      userRol: response?.user?.administrator ? "administrator" : "Usuario",
    });
    localStorage.setItem("Token", response?.token);
    localStorage.setItem("user", response.user?.firstName);
    localStorage.setItem("userId", response?.user?.id);
    localStorage.setItem(
      "rol",
      response?.user?.administrator ? "administrator" : "Usuario"
    );
  } catch (error) {
    alert(
      error?.response.data?.message
        ? error?.response.data?.message
        : "Ha ingresado un email o contraseña incorrectos"
    );
    throw new Error("[getGrupos service error]: " + error);
  }
};
