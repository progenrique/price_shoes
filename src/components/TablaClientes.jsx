import React from "react";
import { useNavigate } from "react-router-dom";

const TablaClientes = (props) => {
  const { data, setShowForm, showForm, deleteClientes } = props;

  const navigate = useNavigate();

  const handleClick = (e) => {
    const type = e.target.dataset.type;
    const id = e.target.dataset.id;
    const name = e.target.dataset.name;

    if (type === "showForm") setShowForm((prev) => !prev);
    if (type === "edit") {
      navigate(`/clientes?name=${name}&id=${id}`);
      setShowForm(false);
    }

    if (type === "delete") deleteClientes(id, name);
  };

  return (
    <div className="container">
      {showForm && (
        <button
          data-type="showForm"
          onClick={handleClick}
          type="button"
          className="btn btn-info">
          Add Cliente
        </button>
      )}
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cliente, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{cliente.name}</td>
              <td
                data-type="edit"
                data-id={cliente.id}
                data-name={cliente.name}
                onClick={handleClick}
                style={{
                  color: "grey",
                  cursor: "pointer",
                }}>
                editar
              </td>
              <td
                data-type="delete"
                data-id={cliente.id}
                data-name={cliente.name}
                onClick={handleClick}
                style={{
                  color: "grey",
                  cursor: "pointer",
                }}>
                Eliminar
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaClientes;
