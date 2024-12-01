import React from "react";
import Button from "./Button";
import { useState } from "react";

const FormProductos = (props) => {
  const { showForm, setShowForm } = props;

  const [dataProductos, setDataProductos] = useState({});

  const handleClick = (e) => {
    if (e.currentTarget.dataset.type === "close") setShowForm((prev) => !prev);
    if (e.currentTarget.dataset.type === "add") {
      console.log(dataProductos);
    }
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setDataProductos((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    console.log(dataProductos);
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
        </div>
      </form>
      <Button type={"add"} handleClick={handleClick}>
        Añadir
      </Button>
    </div>
  );
};

export default FormProductos;
