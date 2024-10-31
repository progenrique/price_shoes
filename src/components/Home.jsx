import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const axiosData = async () => {
      try {
        let res = await axios("https://api-price-shoes.vercel.app/productos"),
          json = await res.data;

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

    axiosData();
  }, []);

  return <div>Home</div>;
};

export default Home;
