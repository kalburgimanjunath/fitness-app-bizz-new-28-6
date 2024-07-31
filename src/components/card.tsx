import { Link } from "react-router-dom";

export default function Card({ title, subtitle, items }) {
  return (
    <div className="p-5 border-2 border-color-blue-300 m-2 rounded-lg">
      {title && (
        <div className="font-bold p-2 border rounded-lg bg-blue-500 w-1/5">
          {title || null}
        </div>
      )}
      <div className="font-bold">{title || null}</div>
      <div className="">{subtitle || null}</div>

      <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 p-20">
        {items &&
          items.map((item) => {
            return (
              <div className="text-center text-white hover:bg-blue-600 bg-blue-500 h-42 p-5 m-2 flex-wrap text-xl">
                <Link to={item}>{item.toUpperCase()}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
