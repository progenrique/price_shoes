import React from "react";
import TablaPedidos from "./TablaPedidos";
import TablaDetails from "./TablaDetails";

const Card = (props) => {
  const { data, home, details } = props;
  const { name, pedidos, cliente_id } = data;
  return (
    <>
      <div
        className="card"
        style={{
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
        }}>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          {home && (
            <>
              {pedidos.map((pedido, index) => (
                <TablaPedidos key={index} data={pedido} />
              ))}
              <a href={`/detalles/${cliente_id}`} className="card-link">
                Detalles
              </a>
            </>
          )}

          {details && (
            <>
              {pedidos.map((pedido, index) => (
                <TablaDetails key={index} data={pedido} />
              ))}
              <a href={`/`} className="card-link">
                Atras
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
