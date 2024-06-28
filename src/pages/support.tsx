import Card from "../components/card";
import Hero from "../components/hero";

export default function Support() {
  const items = [
    "Introduction to Healthy Eating",
    "Benefits of Regular Exercise",
    "Yoga for Beginners",
    "Strength Training Techniques",
    "Cardiovascular Workouts",
    "Effective Weight Loss Strategies",
  ];
  return (
    <div>
      <Hero
        title="Video Library"
        subtitle="Explore our collection of engaging videos promoting diet and fitness mantras. Watch, learn, and get inspired!"
      />
      <Card items={items} />
      <div>
        Pro tip: Add your favorite videos to your personal playlist for easy
        access.
      </div>
    </div>
  );
}
