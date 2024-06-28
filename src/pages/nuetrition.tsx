import Card from "../components/card";
import Hero from "../components/hero";

export default function Nuetrition() {
  const neutritions = ["select any neutritions"];

  return (
    <div>
      <Hero
        title="Meal Recommendations"
        subtitle="Receive personalized meal recommendations based on your specific goals and preferences."
      />
      <Card title="Breakfast" items={neutritions} />
      <Card title="Lunch" items={neutritions} />
      <Card title="Dinner" items={neutritions} />
    </div>
  );
}
