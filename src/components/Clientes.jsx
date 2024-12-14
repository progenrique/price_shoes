import React from "react";
import { useEffect, useState } from "react";
import { axiosData } from "../helpers/axiosData.js";
import TablaClientes from "./TablaClientes.jsx";
import FormularioClientes from "./FromularioClientes.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../helpers/urls.js";

const Clientes = () => {
  const [dataClientes, setDataClientes] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [nameExists, setNameExists] = useState(false);
  const [added, setAdded] = useState(false);
  const [showMessageAdd, setShowMessageAdd] = useState(false);
  const [showMessageEdit, setShowMessageEdit] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const navigate = useNavigate();

  //este useEfect realiza el get para mostrar los clientes
  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () =>
      setDataClientes(await axiosData(ENDPOINTS.clientes, "get"));
    axiosAsync();
    if (added) setAdded(false);
  }, [added]);
  // valida que el nombre no se repita
  const validateName = (name) => {
    if (name.length <= 2) setNameExists(false);
    dataClientes.forEach((cliente) => {
      if (cliente.name.toLowerCase() === name.toLowerCase())
        setNameExists(true);
    });
  };
  //agrega  clientes
  const postCliente = async (data) => {
    try {
      if (nameExists === false) {
        const resultPost = await axiosData(ENDPOINTS.clientes, "post", data);
        if (resultPost.success === true) {
          setShowMessageAdd(true);
          setAdded(true); // es para actualizar la tabla
        }
        setTimeout(() => {
          setShowMessageAdd(false);
          setShowForm(true);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchClientes = async (name) => {
    try {
      const id = params.get("id");
      const resultPost = await axiosData(
        `${ENDPOINTS.clientes}${id}`,
        "PATCH",
        name
      );

      if (resultPost.success === true) {
        setShowMessageEdit(true);
        setAdded(true);
        navigate(`/clientes/`);
      }

      setTimeout(() => {
        setShowMessageEdit(false);
        setShowForm(true);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClientes = async (id, name) => {
    try {
      const resultado = confirm(
        `¿Estás seguro de eliminar el cliente "${name}"`
      );
      if (resultado) {
        const resultDelete = await axiosData(
          `${ENDPOINTS.clientes}${id}`,
          "DELETE"
        );

        if (resultDelete.success === true) {
          alert(`cliente ${name} eliminado correctamente`);
          setAdded(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postPedidos = async () => {
    console.log("agregar pedido");
  };
  return (
    <div className="container">
      {!showForm && (
        <FormularioClientes
          setShowForm={setShowForm}
          postCliente={postCliente}
          patchClientes={patchClientes}
          validateName={validateName}
          nameExists={nameExists}
          showMessageAdd={showMessageAdd}
          showMessageEdit={showMessageEdit}
          showForm={showForm}
        />
      )}
      <TablaClientes
        data={dataClientes}
        setShowForm={setShowForm}
        showForm={showForm}
        deleteClientes={deleteClientes}
        postPedidos={postPedidos}
      />
    </div>
  );
};

export default Clientes;
