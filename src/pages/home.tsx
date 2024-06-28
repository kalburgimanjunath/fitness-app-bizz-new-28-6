import Card from "../components/card";
import Hero from "../components/hero";

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
      <Hero
        title="Clothing Options"
        subtitle="Explore a wide range of clothing options for men, women, and kids that
        are suitable for different fitness activities."
      />
      {/* <h1 className="text-5xlg">Clothing Options</h1>
      <h4 className="text-2xlg">
        Explore a wide range of clothing options for men, women, and kids that
        are suitable for different fitness activities.
      </h4> */}

      <Card items={categories} />
    </div>
  );
}
