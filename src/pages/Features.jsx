import Navbar from '../components/Navbar'
import { FeaturesSection } from '../components/Sections'

export default function FeaturesPage(){
  return (
    <div>
      <Navbar />
      <div className="pt-10" />
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-slate-900 mt-6">Features</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">Highlights of the system to include in your presentation.</p>
      </div>
      <FeaturesSection />
    </div>
  )
}
