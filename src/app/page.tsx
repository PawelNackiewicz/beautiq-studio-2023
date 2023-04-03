import { HeroSection } from "./components/HeroSection";
import { Reviews } from "./components/Reviews";
import { Salon } from "./components/Salon";
import { TrainingSection } from "./components/TrainingSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeroSection />
      <TrainingSection />
      <Reviews />
      <Salon />
    </div>
  )
}
