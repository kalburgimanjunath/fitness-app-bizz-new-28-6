export default function Home() {
  const categories = [
    "Men's Running Shoes",
    "Women's Yoga Pants",
    "Kids' Sports T-Shirts",
    "Men's Compression Shorts",
    "Women's Sports Bras",
    "Kids' Athletic Socks",
  ];
  return (
    <div>
      <h1 className="text-5xlg">Clothing Options</h1>
      <h4 className="text-2xlg">
        Explore a wide range of clothing options for men, women, and kids that
        are suitable for different fitness activities.
      </h4>
      <div className="grid grid-cols-3 gap-4 p-20">
        {categories &&
          categories.map((item) => {
            return (
              <div className="bg-blue-300 h-42 m-2 flex-wrap text-xl">
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
}
