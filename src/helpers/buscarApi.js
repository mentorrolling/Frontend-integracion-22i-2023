const url = "http://localhost:8080/api/buscar";

export const buscarDatos = async (coleccion, termino) => {
  const resp = await fetch(url + "/" + coleccion + "/" + termino);
  const data = await resp.json();

  return data;
};
