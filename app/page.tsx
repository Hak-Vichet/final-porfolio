import Image from 'next/image'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import SkillBars from './components/SkillBars'
import MyWorks from './components/MyWorks'
import ContactMe from './components/ContactMe'

export default function Home() {
  return (
    <main className="mx-20">
      <Hero />
      <AboutMe />
      <Services />
      <SkillBars />
      <MyWorks />
      <ContactMe />
    </main>
  )
}
