import Card from "../components/card";
import Hero from "../components/hero";

export default function Recommendation() {
  return (
    <div>
      <Hero
        title="Personalized Meal Recommendations"
        subtitle="Get customized meal plans based on your age, gender, and dietary preferences."
      />
      <Card
        title="Meal Recommendations"
        subtitle="Discover a variety of delicious and nutritious meal options that are tailored to your specific needs. Our nutrition experts have carefully curated a collection of recipes that will help you achieve your health and wellness goals."
      />
    </div>
  );
}
