import React from "react";
import Button from "./Button";
import { useState } from "react";
import {
  validacionNumber,
  validacionText,
} from "../helpers/schemas/price_eschema";

const FormProductos = (props) => {
  const { showForm, setShowForm, addProducto } = props;

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

  const [dataProductos, setDataProductos] = useState({});
  const [messageValidation, setMessageValidation] = useState(objValidations);
  const [showButton, setShowButton] = useState(true);

  const handleClick = (e) => {
    if (e.currentTarget.dataset.type === "close") setShowForm((prev) => !prev);
    if (e.currentTarget.dataset.type === "add") {
      console.log(dataProductos);
      addProducto();
    }
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let name = e.target.name;

    if (
      name === "id_price" ||
      name === "precio_cliente" ||
      name === "precio_lista" ||
      name === "pasillo"
    ) {
      let number = isNaN(value) ? value : Number(value);
      const validacion = validacionNumber(number);

      if (validacion.success === false) {
        setMessageValidation((prevData) => ({
          ...prevData,
          [name]: false,
        }));
        setShowButton(false);
      } else {
        setMessageValidation((prevData) => ({
          ...prevData,
          [name]: true,
        }));
        setShowButton(true);
      }
    }

    if (
      name === "marca" ||
      name === "color" ||
      name === "piso" ||
      name === "tipo"
    ) {
      const validacion = validacionText(value);

      if (validacion.success === false) {
        setMessageValidation((prevData) => ({
          ...prevData,
          [name]: false,
        }));
        setShowButton(false);
      } else {
        setMessageValidation((prevData) => ({
          ...prevData,
          [name]: true,
        }));
        setShowButton(true);
      }
    }

    setDataProductos((prevData) => ({
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
            value={dataProductos.id_price || ""}
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
            /* value={} */
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
            /* value={} */
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
            /* value={} */
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
            /* value={} */
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
            /* value={} */
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
            /* value={} */
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
            /* value={} */
            id="floatingTextarea7"
            onChange={onChange}></input>
          <label htmlFor="floatingTextarea">Pasillo</label>
          {!messageValidation.pasillo && (
            <small style={{ color: "red" }}>Solo se permiten numeros</small>
          )}
        </div>
      </form>
      {showButton && (
        <Button type={"add"} handleClick={handleClick}>
          Añadir
        </Button>
      )}
    </div>
  );
};

export default FormProductos;
