import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { axiosData } from "../helpers/axiosData.js";
import { ENDPOINTS } from "../helpers/urls.js";

const Home = (props) => {
  const [dataHome, setDataHome] = useState([]);

  useEffect(() => {
    //recibe la peticion y la url
    const axiosAsync = async () =>
      setDataHome(await axiosData(ENDPOINTS.getHome, "get"));
    axiosAsync();
  }, []);

  return (
    <>
      {dataHome.map((el, index) => (
        <Card key={index} data={el} home={true} />
      ))}
    </>
  );
};

export default Home;
