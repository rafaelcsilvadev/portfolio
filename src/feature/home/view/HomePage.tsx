import { AboutSection } from './AboutSection'
import { HeroSection } from './HeroSection'
import { SkillsSection } from './SkillsSection'

export async function HomePage() {
  return (
    <main className="bg-mesh min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  )
}
