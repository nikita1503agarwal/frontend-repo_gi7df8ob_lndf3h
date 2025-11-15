import Navbar from '../components/Navbar'
import { TeamSection } from '../components/Sections'

export default function TeamPage(){
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 mt-6">Our Team</h1>
        <p className="text-slate-600 mt-2 max-w-3xl">Three members collaborating on research, design, and implementation.</p>
      </div>
      <TeamSection />
    </div>
  )
}
