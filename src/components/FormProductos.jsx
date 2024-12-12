import React from "react";
import Button from "./Button";
import { useState } from "react";
import {
  validacionNumber,
  validacionText,
  validacionProducto,
} from "../helpers/schemas/price_eschema";

const FormProductos = (props) => {
  const { showForm, setShowForm, addProducto, valueInputs, setValueInputs } =
    props;

  const objValidations = {
    id_price: true,
    precio_cliente: true,
    precio_lista: true,
    pasillo: true,
    marca: true,
    color: true,
    tipo: true,
    piso: true,
  };

  const [messageValidation, setMessageValidation] = useState(objValidations);

  // para manejar los mensajes de error de los inputs
  //recibe el nombre y el reaultado de la validacion del input
  const messageValidacion = (name, validacion) => {
    if (validacion.success === false) {
      setMessageValidation((prevData) => ({
        ...prevData,
        [name]: false,
      }));
    } else {
      setMessageValidation((prevData) => ({
        ...prevData,
        [name]: true,
      }));
    }
  };

  const handleClick = (e) => {
    if (e.currentTarget.dataset.type === "close") {
      setValueInputs({});
      setShowForm((prev) => !prev);
    }
    if (e.currentTarget.dataset.type === "add") {
      const validacion = validacionProducto(valueInputs);
      if (validacion.success === false) {
        validacion.error.issues.forEach((el) => {
          let name = el.path[0];
          setMessageValidation((prevData) => ({
            ...prevData,
            [name]: false,
          }));
        });
      } else {
        addProducto(valueInputs);
        setValueInputs({});
      }
    }
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = isNaN(e.target.value) ? e.target.value : Number(e.target.value);
    let name = e.target.name;

    if (
      name === "id_price" ||
      name === "precio_cliente" ||
      name === "precio_lista" ||
      name === "pasillo"
    ) {
      const validacion = validacionNumber(value);
      messageValidacion(name, validacion);
    }

    if (name === "marca" || name === "color" || name === "tipo") {
      const validacion = validacionText(value);
      messageValidacion(name, validacion);
    }
    //esta validacion se hace porque el campo piso puede aceptar letras y numero pero solo string
    if (name === "piso") {
      const validacion = validacionText(e.target.value);
      messageValidacion(name, validacion);
    }

    name === "piso"
      ? setValueInputs((prevData) => ({
          ...prevData,
          [key]: e.target.value,
        }))
      : setValueInputs((prevData) => ({
          ...prevData,
          [key]: value,
        }));
  };

  return (
    <div className="container">
      {!showForm && (
        <div style={{ marginLeft: "95%" }}>
          <Button type={"close"} handleClick={handleClick}>
            X
          </Button>
        </div>
      )}
      <form
        style={{
          display: "flex",
          flexWrap: "wrap ",
          gap: "5px",
          justifyContent: "space-between",
        }}>
        <div className="form-floating input">
          <input
            type="text"
            name="id_price"
            className="form-control "
            value={valueInputs.id_price || ""}
            id="floatingTextarea"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea">Id Price</label>

          {!messageValidation.id_price && (
            <small style={{ color: "red" }}>Solo se permiten numeros</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="precio_cliente"
            className="form-control "
            value={valueInputs.precio_cliente || ""}
            id="floatingTextarea1"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea1">Precio Publico</label>
          {!messageValidation.precio_cliente && (
            <small style={{ color: "red" }}>Solo se permiten numeros</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="precio_lista"
            className="form-control "
            value={valueInputs.precio_lista || ""}
            id="floatingTextarea2"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea2">Precio Lista</label>
          {!messageValidation.precio_lista && (
            <small style={{ color: "red" }}>Solo se permiten numeros</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="marca"
            className="form-control "
            value={valueInputs.marca || ""}
            id="floatingTextarea3"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea3">Marca</label>

          {!messageValidation.marca && (
            <small style={{ color: "red" }}>Solo se permiten letras</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="color"
            className="form-control "
            value={valueInputs.color || ""}
            id="floatingTextarea4"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea4">Color</label>
          {!messageValidation.color && (
            <small style={{ color: "red" }}>Solo se permiten letras</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="tipo"
            className="form-control "
            value={valueInputs.tipo || ""}
            id="floatingTextarea5"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea5">Tipo</label>
          {!messageValidation.tipo && (
            <small style={{ color: "red" }}>Solo se permiten letras</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="piso"
            className="form-control "
            value={valueInputs.piso || ""}
            id="floatingTextarea6"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea6">Piso</label>
          {!messageValidation.piso && (
            <small style={{ color: "red" }}>Solo se permiten letras</small>
          )}
        </div>
        <div className="form-floating input">
          <input
            type="text"
            name="pasillo"
            className="form-control "
            value={valueInputs.pasillo || ""}
            id="floatingTextarea7"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea">Pasillo</label>
          {!messageValidation.pasillo && (
            <small style={{ color: "red" }}>Solo se permiten numeros</small>
          )}
        </div>
      </form>
      {Object.keys(valueInputs).length > 0 ? (
        <Button type={"edit"} handleClick={handleClick}>
          Actualizar
        </Button>
      ) : (
        <Button type={"add"} handleClick={handleClick}>
          Añadir
        </Button>
      )}
    </div>
  );
};

export default FormProductos;
