import type { Metadata } from 'next'
import { EnglishLanding } from '@/components/EnglishLanding'

export const metadata: Metadata = {
  title: 'Hermes — The newsroom that never sleeps',
  description: 'Hermes scans the media in real time, scores the stories that matter, rewrites them in your editorial style, and publishes them with an image.',
  alternates: { canonical: '/en' },
  openGraph: { title: 'Hermes — The newsroom that never sleeps', description: 'An always-on digital newsroom for your media outlet.', type: 'website', locale: 'en_US' },
}

export default function EnglishHome() {
  return <EnglishLanding />
}
