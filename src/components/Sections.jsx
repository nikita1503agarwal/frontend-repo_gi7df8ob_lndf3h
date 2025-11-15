import { motion } from 'framer-motion'
import { Check, Sparkles, Brain, Palette, Shield, Zap, Boxes, Workflow, Users, Mail } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    { icon: Sparkles, title: 'AI-driven Templates', desc: 'Generate tailored portfolio layouts and content starters with one click.' },
    { icon: Palette, title: 'Theme Customizer', desc: 'Switch palettes, fonts, and spacing with live preview.' },
    { icon: Boxes, title: 'Component Library', desc: 'Hero, About, Projects, Blog and Contact sections ready to mix-and-match.' },
    { icon: Zap, title: 'One-click Publish', desc: 'Export static site or deploy to hosting in seconds.' },
    { icon: Shield, title: 'SEO & Performance', desc: 'Semantic markup, metadata helpers and image optimization.' },
    { icon: Users, title: 'Team Collaboration', desc: 'Invite peers to co-create and review before publishing.' },
  ]

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-3xl sm:text-4xl font-bold text-slate-900">Features</motion.h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Everything you need to craft a standout portfolio with AI assistance and modern design patterns.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon,title,desc}) => (
            <motion.div key={title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ArchitectureSection() {
  return (
    <section className="py-16 bg-slate-50" id="architecture">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Architecture Diagram</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A high-level view of how the Portfolio Builder orchestrates AI template generation and site assembly.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
            <div className="text-sm text-slate-700">
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/>Client: UI for template selection and customization.</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/>Template Engine: Combines components into coherent layouts.</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/>AI Service: Suggests content for About, Projects, and Contact sections.</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/>Asset Optimizer: Handles images, icons, and SEO metadata.</li>
                <li className="flex items-start gap-3"><Check className="h-5 w-5 text-emerald-600 mt-0.5"/>Publish Layer: Exports static site or deploys to hosting.</li>
              </ul>
            </div>
          </div>
          <motion.div initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="rounded-xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              <Box title="Client" subtitle="React UI" color="from-indigo-500 to-purple-500" />
              <Box title="Template Engine" subtitle="Layouts" color="from-purple-500 to-pink-500" />
              <Box title="AI Service" subtitle="LLM" color="from-emerald-500 to-teal-500" />
              <Box title="Optimizer" subtitle="Images/SEO" color="from-amber-500 to-orange-500" />
              <Box title="Publish" subtitle="Static/Host" color="from-sky-500 to-blue-600" />
              <Box title="Analytics" subtitle="Insights" color="from-rose-500 to-fuchsia-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Box({ title, subtitle, color }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${color} text-white grid place-items-center mb-3`}>
        <Workflow className="h-5 w-5" />
      </div>
      <div className="font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-500">{subtitle}</div>
    </div>
  )
}

export function AIDemoSection() {
  return (
    <section className="py-16 bg-white" id="ai-demo">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">AI Template Generator Demo</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">This is a dummy interface showcasing how users might generate portfolio templates with AI. No backend calls yet.</p>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-slate-200 p-6 bg-slate-50">
            <label className="block text-sm font-medium text-slate-700">Portfolio Style</label>
            <select className="mt-2 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-indigo-500">
              <option>Minimal</option>
              <option>Bold & Colorful</option>
              <option>Elegant Serif</option>
              <option>Tech Neon</option>
            </select>

            <label className="block mt-6 text-sm font-medium text-slate-700">Your Role</label>
            <input className="mt-2 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Frontend Developer" />

            <label className="block mt-6 text-sm font-medium text-slate-700">Preferred Sections</label>
            <div className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
              {['About','Projects','Experience','Skills','Blog','Contact'].map(s => (
                <label key={s} className="flex items-center gap-2 rounded-md border border-slate-200 bg-white p-2">
                  <input type="checkbox" /> {s}
                </label>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
              <Brain className="h-4 w-4" /> Generate Template Idea
            </button>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Preview</h3>
            <div className="mt-3 h-56 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-dashed border-slate-300 grid place-items-center text-slate-500 text-sm">
              AI suggestion will appear here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  const people = [
    { name: 'Aarav Sharma', role: 'Project Lead', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ishita Verma', role: 'Frontend Engineer', img: 'https://images.unsplash.com/photo-1544005314-4f261bf6a9e8?q=80&w=400&auto=format&fit=crop' },
    { name: 'Rohan Mehta', role: 'AI/Backend Engineer', img: 'https://images.unsplash.com/photo-1544005316-04ce1f3f9f38?q=80&w=400&auto=format&fit=crop' },
  ]
  return (
    <section className="py-16 bg-slate-50" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Team</h2>
        <p className="mt-2 text-slate-600">Meet the minds behind Portfolio Builder.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map(p => (
            <motion.div key={p.name} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
              <img src={p.img} alt={p.name} className="h-40 w-full object-cover rounded-lg" />
              <div className="mt-4 font-semibold text-slate-900">{p.name}</div>
              <div className="text-sm text-slate-600">{p.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Get in touch for queries, feedback, or collaboration.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <form className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
              <Mail className="h-4 w-4" /> Send Message
            </button>
          </form>
          <div className="rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900">Details</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              <li>Project: Portfolio Builder with AI Templates</li>
              <li>Phase: 1 (FYP)</li>
              <li>Institution: Your University</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
