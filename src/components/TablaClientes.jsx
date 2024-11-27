import React from "react";

const TablaClientes = (props) => {
  const { data, setShowForm, showForm } = props;

  const handleClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="container">
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cliente, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{cliente.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <button onClick={handleClick} type="button" className="btn btn-info">
          Add Cliente
        </button>
      )}
      {!showForm && (
        <button
          onClick={handleClick}
          style={{ marginLeft: "97%" }}
          type="button"
          className="btn btn-link">
          <h4>x</h4>
        </button>
      )}
    </div>
  );
};

export default TablaClientes;
