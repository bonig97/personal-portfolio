import { ThemeToggle } from "./components/ThemeToggle";
import HeroSection from './components/HeroSection';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <HeroSection />
        </main>
    );
}
