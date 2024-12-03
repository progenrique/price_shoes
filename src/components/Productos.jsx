import React from "react";
import { useEffect, useState } from "react";
import { axiosData } from "../helpers/axiosData.js";
import TablaProductos from "./TablaProductos.jsx";
import FormProductos from "./FormProductos.jsx";

const Productos = () => {
  const [dataProductos, setDataProductos] = useState([]);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () =>
      setDataProductos(
        await axiosData("http://localhost:3001/productos", "get")
      );
    axiosAsync();
  }, []);

  const addProducto = () => {
    console.log("add producto");
  };
  return (
    <>
      {!showForm && (
        <FormProductos
          showForm={showForm}
          setShowForm={setShowForm}
          addProducto={addProducto}
        />
      )}
      <TablaProductos
        setShowForm={setShowForm}
        dataProductos={dataProductos}
        showForm={showForm}
      />
      ;
    </>
  );
};

export default Productos;
