import { ThemeToggle } from "./components/theme/ThemeToggle";
import HeroSection from "./components/HeroSection";
import SystemArchitecture from "./components/SystemArchitecture";
import TechnicalMetrics from "./components/TechnicalMetrics";
import ContactSection from "./components/ContactSection";

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <HeroSection />
            <SystemArchitecture />
            <TechnicalMetrics />
            <ContactSection />
        </main>
    );
}
