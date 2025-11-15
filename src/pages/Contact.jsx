import Navbar from '../components/Navbar'
import { ContactSection } from '../components/Sections'

export default function ContactPage(){
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-slate-900 mt-6">Contact</h1>
        <p className="text-slate-600 mt-2 max-w-3xl">Share a simple form and project details for your audience.</p>
      </div>
      <ContactSection />
    </div>
  )
}
