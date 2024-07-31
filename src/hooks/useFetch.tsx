import axios from "axios";
import { useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const options = {
      method: "GET",
      url: url,
      params: {
        limit: "10",
        offset: "0",
      },
      headers: {
        "x-rapidapi-key": "39f4519645msh927264f8b2d4c07p199c0djsnc005da5fb35a",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useState(() => {
    loadData();
  }, [data]);
  return { data: data };
}
