import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FeaturesPage from './pages/Features'
import ArchitecturePage from './pages/Architecture'
import AIDemoPage from './pages/AIDemo'
import TeamPage from './pages/Team'
import ContactPage from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/ai-demo" element={<AIDemoPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
