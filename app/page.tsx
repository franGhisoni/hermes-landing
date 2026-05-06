import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Pillars } from '@/components/Pillars'
import { Cases } from '@/components/Cases'
import { Process } from '@/components/Process'
import { Showcase } from '@/components/Showcase'
import { Integrations } from '@/components/Integrations'
import { ClosingCTA } from '@/components/ClosingCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <Cases />
        <Process />
        <Showcase />
        <Integrations />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}
