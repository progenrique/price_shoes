import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { axiosData } from "../helpers/axiosData.js";
import Card from "./Card";

const Details = () => {
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState([]);

  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () => {
      const [data] = await axiosData(
        `http://localhost:3001/detalles/${id}`,
        "get"
      );

      setDataDetails(data);
    };

    axiosAsync();
  }, []);

  return (
    <>
      <h2>detalle del cliente</h2>
      {dataDetails.length === 0 || <Card data={dataDetails} details={true} />}
    </>
  );
};

export default Details;
