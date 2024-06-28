export default function Card({ title, subtitle, items }) {
  return (
    <div className="p-5 border-2 border-color-blue-300 m-2 rounded-lg">
      {title && (
        <div className="font-bold p-2 border rounded-lg bg-violet-500 w-1/5">
          {title || null}
        </div>
      )}
      <div className="font-bold">{title || null}</div>
      <div className="">{subtitle || null}</div>

      <div className="grid grid-cols-3 gap-4 p-20">
        {items &&
          items.map((item) => {
            return (
              <div className="bg-violet-400 h-42 p-5 m-2 flex-wrap text-xl">
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
}
