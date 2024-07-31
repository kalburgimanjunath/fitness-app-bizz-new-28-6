import { redirect, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
const ExCard = ({ exItem }) => {
  return (
    <div className="border shadow-lg p-2 m-1 rounded-lg">
      {/* <div>{exItem.equipment}</div> */}
      <div className="cover justify-center flex">
        <img src={exItem.gifUrl} />
      </div>
      <div>
        <div>
          <span className="font-bold">Instructions:</span> {exItem.instructions}{" "}
        </div>
      </div>
      <div>
        <div>
          <span className="font-bold">Muscles:</span> {exItem.secondaryMuscles}{" "}
        </div>
      </div>
      {/* <div>
        <div>
          <span className="font-bold">Target:</span> {exItem.target}{" "}
        </div>
      </div> */}
    </div>
  );
};
export default function ExcersiseVideoDetail() {
  const { id } = useParams();
  const { data } = useFetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${id}`
  );
  return (
    <div>
      <div>
        <Link to="/" className="p-2 bg-blue-200 rounded-lg m-2 ">
          Back
        </Link>
      </div>
      <div className="font-bold m-2 text-2xl text-center text-blue-500 uppercase m-2">
        Exercise:{id}
      </div>
      <div className="grid md:grid-cols-2 xs:grid-cols-1 m-2">
        {data &&
          data.map((item, index) => {
            return <ExCard item={index} exItem={item} />;
          })}
      </div>
    </div>
  );
}
