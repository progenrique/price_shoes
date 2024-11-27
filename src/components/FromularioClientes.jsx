import React from "react";
import { useEffect, useState } from "react";

const FromularioClientes = (props) => {
  const { postCliente } = props;
  const [dataName, setDataName] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const handleKeyUp = (e) => {
    const regex = /^[a-zA-Z]+$/; // Solo letras
    const data = { name: e.target.value };
    setDataName(data);

    setIsValid(regex.test(data.name));
  };
  const handleCkilc = () => {
    postCliente(dataName);
  };
  return (
    <form className="form-floating">
      <input
        type="text"
        className="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
        onKeyUp={handleKeyUp}></input>
      <label htmlFor="floatingTextarea">Nombre</label>
      {!isValid && (
        <p style={{ color: "red" }}>el campo nombre solo recibe letras</p>
      )}

      <div className="d-grid gap-2">
        <button onClick={handleCkilc} className="btn btn-primary" type="button">
          Añadir
        </button>
      </div>
    </form>
  );
};

export default FromularioClientes;
