import { Link } from "react-router-dom";
export default function Header() {
  const menus = [
    "Home",
    "ExcersiseVideos",
    "Clothing",
    "Nuetrition",
    "Plan",
    "Journey",
    "Resources",
    "Recommendation",
    "Support",
    "Tracking",
  ];
  return (
    <div className="fixed top-0 bg-blue-500 p-2 shadow-lg">
      {menus &&
        menus.map((item) => {
          return (
            <Link
              to="./"
              className="p-2 m-1 text-white font-bold hover:bg-green-400 rounded-lg"
            >
              {item}
            </Link>
          );
        })}
    </div>
  );
}
