import React from "react";

const FormPedidos = () => {
  return (
    <div>
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
            value=""
            id="floatingTextarea"></input>
          <label htmlFor="floatingTextarea">Id Price</label>

          <small style={{ color: "red" }}>Solo se permiten numeros</small>
        </div>
      </form>
    </div>
  );
};

export default FormPedidos;
