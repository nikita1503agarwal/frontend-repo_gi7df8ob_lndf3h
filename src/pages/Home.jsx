import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { FeaturesSection, ArchitectureSection, AIDemoSection, TeamSection, ContactSection } from '../components/Sections'

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <ArchitectureSection />
      <AIDemoSection />
      <TeamSection />
      <ContactSection />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Portfolio Builder</footer>
    </div>
  )
}
