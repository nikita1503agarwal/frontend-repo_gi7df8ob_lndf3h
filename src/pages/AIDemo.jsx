import Navbar from '../components/Navbar'
import { AIDemoSection } from '../components/Sections'

export default function AIDemoPage(){
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 mt-6">AI Template Generator Demo</h1>
        <p className="text-slate-600 mt-2 max-w-3xl">A dummy interface to demonstrate how users could generate templates. No backend required for Phase-1.</p>
      </div>
      <AIDemoSection />
    </div>
  )
}
