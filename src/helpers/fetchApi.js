const url = "http://localhost:8080/api/usuarios";

export const crearUsuario = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

export const crearCategoria = async (datos) => {
  try {
    const resp = await fetch("http://localhost:8080/api/categorias", {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDA4ZWRmMzhiMjkxY2NmYWZjOTUwNjciLCJpYXQiOjE2Nzk1MDY5MzIsImV4cCI6MTY3OTUyMTMzMn0.Kxxbq_zO-xzIzwNdzyKBGOInU_802XYh7iHDzpWVVmM",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
