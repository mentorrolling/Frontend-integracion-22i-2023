const url = "http://localhost:8080/api/cursos";

export const getCursos = async () => {
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};
