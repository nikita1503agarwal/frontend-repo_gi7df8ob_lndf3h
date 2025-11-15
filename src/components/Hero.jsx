import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm ring-1 ring-black/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            AI-powered portfolio templates
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Portfolio Builder with AI Templates
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Build stunning personal portfolios in minutes. Choose a style, let AI draft sections, and publish your presence with confidence.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/ai-demo" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
              Try the AI Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-black/5 hover:bg-white">
              Explore Features
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
