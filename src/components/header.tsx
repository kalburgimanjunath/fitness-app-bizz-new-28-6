import { Link } from "react-router-dom";
export default function Header() {
  const menus = [
    { title: "Home", link: "" },
    { title: "Dance Fitness", link: "dance" },
    // { title: "ExcersiseVideos", link: "ExcersiseVideos" },
    // { title: "Clothing", link: "Clothing" },
    // { title: "Nuetrition", link: "Nuetrition" },
    // { title: "Plan", link: "Plan" },
    // { title: "Journey", link: "Journey" },
    // { title: "Resources", link: "Resources" },
    // { title: "Recommendation", link: "Recommendation" },
    // { title: "Support", link: "Support" },
    // { title: "Tracking", link: "Tracking" },
  ];
  return (
    <div className="fixed w-full top-0 bg-blue-500 p-2 shadow-lg">
      {menus &&
        menus.map((item) => {
          return (
            <Link
              to={`/${item.link.toLocaleLowerCase()}`}
              className="p-2 m-1 text-white font-bold hover:border-b-1 hover:bg-blue-600 rounded-lg"
            >
              {item.title}
            </Link>
          );
        })}
    </div>
  );
}
