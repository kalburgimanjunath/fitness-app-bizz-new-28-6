import Card from "../components/card";
import Hero from "../components/hero";

export default function Journey() {
  const items = [
    `Example mantra: "No pain, no gain!"`,
    `Example mantra: "Stronger every day!"`,
  ];
  return (
    <div>
      <Hero
        title="My Favorite Fitness Mantra"
        subtitle="Share your favorite fitness mantra that keeps you motivated and inspired!"
      />
      <Card items={items} />
    </div>
  );
}
