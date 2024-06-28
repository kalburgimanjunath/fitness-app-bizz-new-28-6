import Card from "../components/card";
import Hero from "../components/hero";

export default function Excersise() {
  const items = ["Warm-up exercises", "Strength training", "Cardio workouts"];
  return (
    <div>
      <Hero
        title="Exercise Instructional Videos"
        subtitle="Watch these step-by-step instructional videos to learn a wide range of exercises and techniques."
      />
      <Card items={items} />
    </div>
  );
}
