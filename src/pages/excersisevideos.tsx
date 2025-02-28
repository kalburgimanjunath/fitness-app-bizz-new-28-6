import { useState } from "react";
import Card from "../components/card";
import Hero from "../components/hero";
import axios from "axios";
export default function Excersise() {
  const items = ["Warm-up exercises", "Strength training", "Cardio workouts"];
  const [data, setData] = useState([]);
  const loadData = async () => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
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
  console.log(data);
  return (
    <div>
      <Hero
        title="Learn to be fit..."
        subtitle="Watch these step-by-step instructional videos to learn a wide range of exercises and techniques."
      />
      <Card items={data} />
    </div>
  );
}
