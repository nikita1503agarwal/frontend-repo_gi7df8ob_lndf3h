import Navbar from '../components/Navbar'
import { ArchitectureSection } from '../components/Sections'

export default function ArchitecturePage(){
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 mt-6">Architecture Diagram</h1>
        <p className="text-slate-600 mt-2 max-w-3xl">Use this structured overview to discuss modules, data flow, and responsibilities.</p>
      </div>
      <ArchitectureSection />
    </div>
  )
}
