import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { validacionCliente } from "../helpers/schemas/price_eschema";

const FromularioClientes = (props) => {
  const {
    postCliente,
    nameExists,
    validateName,
    showMessageAdd,
    showForm,
    setShowForm,
    patchClientes,
    showMessageEdit,
  } = props;

  const [dataName, setDataName] = useState({ name: "" });
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");

  useEffect(() => {
    name !== null && setDataName({ name });
  }, [name]);

  /* const handleKeyUp = (e) => {
    const regex = /^[a-zA-Z]+$/; // Solo letras
    const data = { name: e.target.value };
    
    setDataName(data);
    setIsValid(regex.test(data.name));
  }; */
  const handleKeyUp = (e) => {
    const data = { name: e.target.value };
    const validacion = validacionCliente(data);
    setIsValid(validacion.success);
    validateName(e.target.value); // verificar en la bd que no exista el nombre
    setDataName(data);
  };

  const handleClick = (e) => {
    if (e.currentTarget.dataset.type === "close") {
      navigate(`/clientes`);
      setShowForm((prev) => !prev);
    }
    if (e.currentTarget.dataset.type === "add") postCliente(dataName);

    if (e.currentTarget.dataset.type === "edit") patchClientes(dataName);
  };
  return (
    <>
      {!showForm && (
        <button
          onClick={handleClick}
          style={{ marginLeft: "97%" }}
          type="button"
          className="btn btn-link"
          data-type="close">
          <h4>x</h4>
        </button>
      )}

      <form className="form-floating">
        <input
          type="text"
          className="form-control"
          value={dataName.name}
          id="floatingTextarea"
          onChange={handleKeyUp}></input>
        <label htmlFor="floatingTextarea">Nombre</label>

        {!isValid && (
          <p style={{ color: "red" }}>
            el campo no puede ir vacio solo recibe letras
          </p>
        )}
        {nameExists && (
          <p style={{ color: "red" }}>
            el nombre {`${dataName.name}`} ya existe
          </p>
        )}
        {showMessageAdd && (
          <h5 style={{ color: "green" }}>
            el nombre {`${dataName.name}`} agregado correctamente
          </h5>
        )}
        {showMessageEdit && (
          <h5 style={{ color: "green" }}>
            el nombre {`${dataName.name}`} se actualizo correctamente
          </h5>
        )}

        <div className="d-grid gap-2">
          {name !== null
            ? isValid === true &&
              nameExists === false && (
                <Button type={"edit"} handleClick={handleClick}>
                  Modificar
                </Button>
              )
            : isValid === true &&
              nameExists === false && (
                <Button type={"add"} handleClick={handleClick}>
                  Añadir
                </Button>
              )}
        </div>
      </form>
    </>
  );
};

export default FromularioClientes;
