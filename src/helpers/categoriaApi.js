const url = "http://localhost:8080/api/categorias";

export const getCategorias = async (token) => {
  const resp = await fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": token,
    },
  });
  const data = await resp.json();
  return data;
};
