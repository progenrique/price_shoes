import axios from "axios";

export const axiosData = async (url, peticion = "get", data = false) => {
  try {
    let options = {
      method: peticion,
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    };

    if (data) options.data = data;

    let res = await axios(url, options),
      json = res.data;
    return json;
  } catch (error) {
    console.log(error);
  }
};
