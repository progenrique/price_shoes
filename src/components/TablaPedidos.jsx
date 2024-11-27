import React from "react";

const TablaPedidos = (props) => {
  const { numero_pedido, ganancia, total, restante, numero_pagos } = props.data;

  return (
    <>
      <h4>{`No. Pedido ${numero_pedido}`}</h4>
      <table className="table">
        <thead>
          <tr>
            <th>{`Total Cliente`}</th>
            <th>{`Total P. Lista`}</th>
            <th>{`Ganancia`}</th>
            <th>{`Resta`}</th>
            <th>{`abonado`}</th>
            <th>{`No. pagos`}</th>
            <th>{`pago`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{total.precio_cliente} </td>
            <td>{total.precio_lista} </td>
            <td>{ganancia} </td>
            <td>{restante} </td>
            <td>{total.abonado} </td>
            <td>{numero_pagos} </td>
            <td>{total.precio_cliente / numero_pagos} </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TablaPedidos;
