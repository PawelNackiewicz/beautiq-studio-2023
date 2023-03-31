import { HeroSection } from "./components/HeroSection";
import { TrainingSection } from "./components/TrainingSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <HeroSection />
        <TrainingSection />
    </div>
  )
}
