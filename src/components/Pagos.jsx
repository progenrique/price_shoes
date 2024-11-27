import React from "react";

const Pagos = (props) => {
  const { data } = props;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h6>Registro pagos</h6>
      <table className="table">
        <thead>
          <tr>
            <th>{`No Pago`}</th>
            <th>{`Fecha De Pago`}</th>
            <th>{`$ Cantidad $`}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pago, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{pago.fecha_abono}</td>
              <td>{pago.pago}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pagos;
