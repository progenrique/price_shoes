import React from "react";
import Pagos from "./Pagos";
import TablaTolal from "./TablaTolal";

const TablaDetails = (props) => {
  const { pedido_id, productos, pagos, total } = props.data;

  return (
    <div style={{ marginTop: "3rem" }}>
      <h4>{`No. Pedido ${pedido_id}`}</h4>
      <p>productos</p>
      <table className="table">
        <thead>
          <tr>
            <th>{`Id Price`}</th>
            <th>{`Precio Publico`}</th>
            <th>{`Precio Lista`}</th>
            <th>{`Ganancia`}</th>
            <th>{`Talla`}</th>
            <th>{`Marca`}</th>
            <th>{`Tipo`}</th>
            <th>{`Color`}</th>
            <th>{`Piso`}</th>
            <th>{`Pasillo`}</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.id_price}</td>
              <td>{producto.precio_cliente}</td>
              <td>{producto.precio_lista}</td>
              <td>{producto.precio_cliente - producto.precio_lista}</td>
              <td>{producto.talla}</td>
              <td>{producto.marca}</td>
              <td>{producto.tipo}</td>
              <td>{producto.color}</td>
              <td>{producto.piso}</td>
              <td>{producto.pasillo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablaTolal data={total} />
      {pagos === null || <Pagos data={pagos} />}
    </div>
  );
};

export default TablaDetails;
