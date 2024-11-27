import React from "react";
import { useEffect, useState } from "react";
import { axiosData } from "../helpers/axiosData.js";
import TablaClientes from "./TablaClientes.jsx";
import FormularioClientes from "./FromularioClientes.jsx";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () =>
      setDataClientes(await axiosData("http://localhost:3001/clientes", "get"));
    axiosAsync();
  }, []);
  const postCliente = async (data) => {
    try {
      const resultPost = await axiosData(
        "http://localhost:3001/clientes",
        "post",
        data
      );

      console.log(resultPost);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <TablaClientes
        data={dataClientes}
        setShowForm={setShowForm}
        showForm={showForm}
      />

      {!showForm && (
        <FormularioClientes
          setShowForm={setShowForm}
          postCliente={postCliente}
        />
      )}
    </div>
  );
};

export default Clientes;
