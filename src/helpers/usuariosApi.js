const url = "http://localhost:8080/api/usuarios";

//traer usuario por id

export const getUsuraioById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo obtener la info");
  }
};
