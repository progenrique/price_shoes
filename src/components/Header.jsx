import React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-body-tertiary"
        data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#DB0080" }}>
            Sistema de pedidos PS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: "#DB0080" }}>
                Home
              </a>
              <a
                className="nav-link"
                href="/clientes"
                style={{ color: "#DB0080" }}>
                Clientes
              </a>
              <a
                className="nav-link"
                href="productos"
                style={{ color: "#DB0080" }}>
                Productos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
