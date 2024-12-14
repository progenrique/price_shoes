import React from "react";
import { useEffect, useState } from "react";
import { axiosData } from "../helpers/axiosData.js";
import TablaProductos from "./TablaProductos.jsx";
import FormProductos from "./FormProductos.jsx";
import { ENDPOINTS } from "../helpers/urls.js";

const Productos = () => {
  const [dataProductos, setDataProductos] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [reloadProducts, setReloadProducts] = useState(true);
  const [valueInputs, setValueInputs] = useState({});

  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () =>
      setDataProductos(await axiosData(ENDPOINTS.productos, "get"));
    axiosAsync();
  }, [reloadProducts]);

  const addProducto = async (data) => {
    const result = await axiosData(ENDPOINTS.productos, "POST", data);

    if (result.success === true) {
      setReloadProducts((prev) => !prev);
      setShowForm((prev) => !prev);
    }
  };

  const editProductos = async (producto) => {
    setValueInputs(producto);
  };

  return (
    <>
      {!showForm && (
        <FormProductos
          showForm={showForm}
          setShowForm={setShowForm}
          addProducto={addProducto}
          valueInputs={valueInputs}
          setValueInputs={setValueInputs}
        />
      )}
      <TablaProductos
        setShowForm={setShowForm}
        dataProductos={dataProductos}
        showForm={showForm}
        editProductos={editProductos}
      />
      ;
    </>
  );
};

export default Productos;
