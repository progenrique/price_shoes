import React from "react";
import Button from "./Button";

const TablaProductos = (props) => {
  const { dataProductos, setShowForm, showForm } = props;

  const handleClick = (e) => {
    const type = e.target.dataset.type;
    if (type === "showForm") setShowForm((prev) => !prev);
  };
  return (
    <div className="container">
      {showForm && (
        <Button type={"showForm"} handleClick={handleClick}>
          add Producto
        </Button>
      )}
      <table className="table table-striped table-hover container">
        <thead style={{ margin: "auto" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Precio Publico</th>
            <th scope="col">Precio Lista</th>
            <th scope="col">Marca</th>
            <th scope="col">Color</th>
            <th scope="col">Tipo</th>
            <th scope="col">Piso</th>
            <th scope="col">Pasillo</th>
          </tr>
        </thead>
        <tbody>
          {dataProductos.map((producto, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{producto.id_price}</td>
              <td>{producto.precio_cliente}</td>
              <td>{producto.precio_lista}</td>
              <td>{producto.marca}</td>
              <td>{producto.color}</td>
              <td>{producto.tipo}</td>
              <td>{producto.piso}</td>
              <td>{producto.pasillo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
