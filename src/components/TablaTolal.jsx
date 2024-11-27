import React from "react";

const TablaTolal = (props) => {
  console.log(props.data);
  const { precio_cliente, precio_lista, abonado } = props.data;
  return (
    <div style={{ marginTop: "2rem" }}>
      <h6>total pedido</h6>
      <table className="table">
        <thead>
          <tr>
            <th>{`Precio Publico`}</th>
            <th>{`Precio Lista`}</th>
            <th>{`abonado`}</th>
            <th>{`ganancia`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{precio_cliente}</td>
            <td>{precio_lista}</td>
            <td>{abonado}</td>
            <td>{`$${precio_cliente - precio_lista}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaTolal;
