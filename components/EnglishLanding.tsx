'use client'

import { useEffect, useState } from 'react'
import { FadeIn } from './FadeIn'
import './Header.css'
import { LanguageSwitcher } from './LanguageSwitcher'

function HeaderEN() {
  const [scrolled, setScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const section = document.getElementById('intelligence')
      if (section) {
        const rect = section.getBoundingClientRect()
        setIsOverDark(rect.top <= 55 && rect.bottom >= 20)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = isOverDark ? 'text-cream/70 hover:text-cream' : 'text-muted hover:text-carbon'
  return (
    <header className={`hm-nav${scrolled ? ' hm-nav--scrolled' : ''}${isOverDark ? ' hm-nav--dark' : ''}`}>
      <div className="hm-nav-pill"><div className="hm-nav-content">
        <a href="#" className={`flex items-center gap-3 font-serif text-xl tracking-tight transition-colors duration-300 ${isOverDark ? 'text-cream hover:text-terracotta' : 'text-carbon hover:text-terracotta'}`} aria-label="Hermes — Home">
          <img src="/logo.png" alt="" className={`h-7 w-auto transition-all duration-300 ${isOverDark ? 'brightness-0 invert' : ''}`} aria-hidden="true" />
          <span>Hermes</span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-7">
          <LanguageSwitcher dark={isOverDark} />
          <a href="#cases" className={`hidden sm:block text-sm transition-colors duration-300 tracking-wide ${linkClass}`}>Use cases</a>
          <a href="#process" className={`hidden sm:block text-sm transition-colors duration-300 tracking-wide ${linkClass}`}>Process</a>
          <a href="#product" className={`hidden md:block text-sm transition-colors duration-300 tracking-wide ${linkClass}`}>Product</a>
          <a href="#contact" className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-300 tracking-wide ${isOverDark ? 'text-cream border border-cream/40 hover:border-cream bg-cream/10' : 'text-carbon border border-border/70 hover:border-carbon'}`}>Contact</a>
        </nav>
      </div></div>
    </header>
  )
}

const pillars = [
  ['01', 'Publish before the competition.', 'Cron-based scrapers scan the main media outlets in real time. When a story matters, Hermes captures, processes, and publishes it within minutes.'],
  ['02', 'Decide like your best editor.', 'Every story is vectorized, scored for interest, and deduplicated against everything already processed. It does not publish just anything: it publishes what moves the needle.'],
  ['03', 'Publish without touching a keyboard.', 'Rewrite in your editorial style, secure a cover image, and send the story to WordPress, social media, or any endpoint. Configurable rules and schedules, with optional human control.'],
]

const steps = [
  ['01', 'Capture', 'Cron scrapers', 'Configurable scrapers run against the sources you choose — Clarín, La Nación, Infobae, TN, or any new outlet you connect.'],
  ['02', 'Intelligence', 'Scoring and dedupe', 'Every story is vectorized with embeddings, scored for interest (1–10), and semantically deduplicated against everything already processed.'],
  ['03', 'Rewrite', 'Editorial style', 'AI rewrites headlines and body copy with customizable prompts per source and destination. No copy/paste, no SEO penalty.'],
  ['04', 'Image', 'Cover secured', 'It selects and scores the best candidate image, then generates one with AI when there is no valid option. No story goes live without a cover.'],
  ['05', 'Publication', 'Configurable workflows', 'Rules by section, source, and score trigger WordPress by email, webhooks, or social media. Optional human approval from the newsroom.'],
]

const cases = [
  ['Digital media', 'The outlet that multiplies volume without scaling its newsroom.', 'Covering news in real time requires 24/7 writers — expensive and unsustainable. Hermes scrapes the sources you define, scores what matters, rewrites in your editorial line, and publishes to WordPress by email. Your team edits and approves; the rest is automatic.'],
  ['Content and SEO agencies', 'Vertical and niche sites at scale, without duplicate content.', 'You produce dozens of topical sites and need a constant flow. Hermes semantically deduplicates with embeddings, rewrites in different styles per site, always secures an image, and sends to multiple WordPress instances with independent prompts and rules.'],
  ['Newsletters and affiliate blogs', 'The first headline defines the click.', 'For newsletters, vertical blogs, and affiliate operators. Hermes filters only stories above your minimum interest score, rewrites in your tone, schedules publications, and leaves everything ready in the dashboard for human review.'],
]

const outcomes = [
  ['Timing & Arbitrage', 'Detect silence: publish when the rival is absent.', 'AI analyzes your competitors’ hourly patterns. If a rival outlet reduces its frequency between 2:00 and 5:00 PM or on weekends, Hermes points out the optimal window to own the feed and capture attention.'],
  ['Interest vs. Coverage', 'High-interest stories almost nobody covered.', 'It cross-references each topic’s potential against how often other outlets have already published it. Detects high-interest stories with little competition and stops topics already saturated everywhere.'],
  ['Editorial Advantage', 'Go beyond standard coverage with better angles.', 'It semantically compares how other outlets cover the same event. If everyone takes the same predictable angle, Hermes suggests direct-impact twists and analysis that differentiate your content.'],
  ['Strategic Briefing', 'From static charts to clear action directives.', 'Dashboards do not make decisions on their own. Hermes generates a daily report with actionable reasoning: which verticals to strengthen, which niches to lead, and which strategic decisions will move your outlet forward.'],
]

function SectionTitle({ children }: { children: React.ReactNode }) { return <p className="text-xs uppercase tracking-[0.32em] text-muted mb-14 md:mb-20">{children}</p> }

export function EnglishLanding() {
  return <>
    <HeaderEN />
    <main>
      <section className="min-h-screen flex flex-col justify-center pt-28 pb-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto"><div className="max-w-5xl">
        <FadeIn><p className="text-xs uppercase tracking-[0.32em] text-muted mb-10 md:mb-14">Automated editorial platform</p></FadeIn>
        <FadeIn delay={0.2}><h1 className="font-serif font-black text-carbon leading-[0.9] mb-8 md:mb-12" style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}>The newsroom<br />that never<br />sleeps.</h1></FadeIn>
        <FadeIn delay={0.35}><p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12 md:mb-16">Hermes scans the media, decides what matters, rewrites it in your style, and publishes it with an image — around the clock, on your site and the channels you already use.</p></FadeIn>
        <FadeIn delay={0.45}><div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"><a href="#contact" className="inline-block bg-carbon text-cream text-sm font-medium tracking-[0.14em] uppercase px-8 py-4 rounded-sm hover:bg-[#2d2928] transition-colors duration-300">Book a demo</a><a href="#process" className="text-sm text-carbon tracking-wide underline underline-offset-4 decoration-carbon/30 hover:text-terracotta transition-colors duration-300">See how it works</a></div></FadeIn>
      </div></section>

      <section className="py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-16 border-t border-border/40"><div className="max-w-[860px] mx-auto text-center"><FadeIn><p className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] text-carbon leading-[1.4] tracking-tight">Every story you publish late is a reader who went somewhere else. Every copy/paste hurts your SEO. Every hour a writer spends filtering, rewriting, and finding a cover image is money spent without new traffic.</p></FadeIn><FadeIn delay={0.15}><p className="mt-8 md:mt-10 text-base md:text-lg text-muted tracking-wide">Hermes exists so that never happens again.</p></FadeIn></div></section>

      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40"><div className="max-w-[1400px] mx-auto"><div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">{pillars.map(([num, title, body], i) => <FadeIn key={num} delay={i * .12}><div><span className="font-serif font-black text-[6rem] md:text-[7rem] text-border leading-none block mb-4" aria-hidden="true">{num}</span><h3 className="font-serif text-xl md:text-2xl text-carbon font-semibold leading-snug mb-4">{title}</h3><p className="text-muted leading-relaxed text-base">{body}</p></div></FadeIn>)}</div></div></section>

      <section id="intelligence" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-carbon text-cream"><div className="max-w-[1400px] mx-auto"><div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24"><div><FadeIn><p className="text-xs uppercase tracking-[0.32em] text-cream/50 mb-8">Intelligence for leadership</p><h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">It does not just automate stories. It helps you beat the competition.</h2></FadeIn><FadeIn delay={.12}><p className="mt-8 text-base md:text-lg text-cream/60 leading-relaxed max-w-xl">A real-time competitive analysis layer that turns millions of publications and market silences into high-impact editorial decisions for the people who lead your outlet.</p></FadeIn></div><div className="border-t border-cream/20">{outcomes.map(([label, title, body], i) => <FadeIn key={label} delay={i * .1}><article className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 md:py-10 border-b border-cream/20"><p className="text-[0.65rem] uppercase tracking-[0.24em] text-terracotta font-medium">{label}</p><div><h3 className="font-serif text-xl md:text-2xl font-semibold leading-snug mb-3">{title}</h3><p className="text-sm md:text-base text-cream/55 leading-relaxed">{body}</p></div></article></FadeIn>)}</div></div></div></section>

      <section id="cases" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-surface/25"><div className="max-w-[1400px] mx-auto"><FadeIn><SectionTitle>Use cases</SectionTitle></FadeIn><div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">{cases.map(([eyebrow, title, body], i) => <FadeIn key={eyebrow} delay={i * .1}><article className="border border-border/50 bg-cream/70 p-8 md:p-10 rounded-sm flex flex-col gap-5"><p className="text-[0.65rem] uppercase tracking-[0.28em] text-terracotta font-medium">{eyebrow}</p><h3 className="font-serif text-xl md:text-2xl text-carbon font-semibold leading-snug">{title}</h3><p className="text-muted text-sm md:text-base leading-relaxed">{body}</p></article></FadeIn>)}</div></div></section>

      <section id="process" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40"><div className="max-w-[1400px] mx-auto"><FadeIn><SectionTitle>How it works</SectionTitle></FadeIn><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-10 lg:gap-6">{steps.map(([num, time, title, body], i) => <FadeIn key={num} delay={i * .08}><div className="border-t-2 border-border pt-8"><span className="font-serif text-5xl font-black text-terracotta/20 block mb-6 leading-none" aria-hidden="true">{num}</span><p className="text-[0.65rem] uppercase tracking-[0.22em] text-muted mb-2">{time}</p><h3 className="font-serif text-lg font-semibold text-carbon mb-3 leading-snug">{title}</h3><p className="text-sm text-muted leading-relaxed">{body}</p></div></FadeIn>)}</div></div></section>

      <section id="product" className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-t border-border/40"><div className="max-w-[1400px] mx-auto"><FadeIn><p className="text-xs uppercase tracking-[0.32em] text-muted mb-6">The product</p></FadeIn><FadeIn delay={.1}><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-carbon font-semibold leading-tight max-w-3xl mb-16 md:mb-24">A digital newsroom, without writers.</h2></FadeIn><div className="flex flex-col gap-24 md:gap-32">{[['/screenshots/newsroom.png', 'Newsroom', 'Every processed story in one view.', 'Editorial grid with interest score, source, section, and status. Filter by outlet, section, and status to review, approve, regenerate, or publish in one click.'], ['/screenshots/flows.png', 'Flows', 'Publication rules that trigger themselves.', 'Configure flows by destination, source, section, minimum score, and schedule. A visual cron builder to define when, what, and where to publish — without writing cron expressions by hand.'], ['/screenshots/settings.png', 'Settings', 'Sections and scheduled scrapes, your way.', 'Define the sections you cover, global routes, and how often each source is scraped. Every schedule scans all configured sections automatically.']].map(([src, eyebrow, title, body], i) => <FadeIn key={src} delay={i * .05}><div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}><div className="lg:col-span-7"><div className="border border-border/50 bg-cream rounded-sm overflow-hidden shadow-sm"><img src={src} alt={`${eyebrow} — ${title}`} className="w-full h-auto block" loading="lazy" /></div></div><div className="lg:col-span-5"><p className="text-[0.65rem] uppercase tracking-[0.28em] text-terracotta font-medium mb-4">{eyebrow}</p><h3 className="font-serif text-2xl md:text-3xl text-carbon font-semibold leading-snug mb-5">{title}</h3><p className="text-muted text-base md:text-lg leading-relaxed">{body}</p></div></div></FadeIn>)}</div></div></section>

      <section className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-surface/25 border-t border-border/40"><div className="max-w-[1400px] mx-auto"><FadeIn><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-carbon font-semibold leading-tight mb-6">Works with what you already have.</h2></FadeIn><FadeIn delay={.1}><p className="text-muted text-base md:text-lg max-w-xl leading-relaxed mb-16 md:mb-20">Hermes publishes to your WordPress by email, triggers custom webhooks, posts to social media, and connects to the sources you choose. If you use it, we can integrate it.</p></FadeIn><FadeIn delay={.2}><ul aria-label="Available integrations" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">{['WordPress', 'Webhooks', 'Twitter / X', 'Clarín', 'La Nación', 'Infobae', 'TN', 'RSS', 'OpenAI', 'pgvector', 'Postgres', 'Prisma'].map(name => <li key={name} className="text-sm text-muted/50 font-mono tracking-tight">{name}</li>)}</ul></FadeIn></div></section>

      <section id="contact" className="py-36 md:py-52 lg:py-60 px-6 md:px-12 lg:px-16"><div className="max-w-[860px] mx-auto text-center"><FadeIn><h2 className="font-serif font-black text-carbon leading-[0.92] mb-10 md:mb-14" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}>Let’s talk about the first story you’ll publish with Hermes.</h2></FadeIn><FadeIn delay={.15}><a href="mailto:hola@hermes.ai" className="inline-block bg-carbon text-cream text-sm font-medium tracking-[0.14em] uppercase px-10 py-5 rounded-sm hover:bg-[#2d2928] transition-colors duration-300">Book a 30-minute meeting</a></FadeIn><FadeIn delay={.25}><p className="mt-8 text-sm text-muted/60 leading-relaxed max-w-sm mx-auto">No commitment. No salesperson. A technical conversation to see if Hermes is right for your outlet.</p></FadeIn></div></section>
    </main>
    <footer className="border-t border-border/40 py-10 px-6 md:px-12 lg:px-16"><div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"><p className="font-serif text-lg text-carbon">Hermes</p><p className="text-sm text-muted order-last sm:order-none">A Sodium product — {new Date().getFullYear()}</p><a href="mailto:ghisonifran@gmail.com" className="text-sm text-muted hover:text-carbon transition-colors duration-300">ghisonifran@gmail.com</a></div></footer>
  </>
}
