import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NeuroFit - Therapie und Trainingsakademie',
  description: 'Biofeedback und Neurofeedback - Ihre Praxis für neurologische Therapie und Weiterbildung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}