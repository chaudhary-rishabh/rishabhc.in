// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next';

// Import the font and expose as CSS variable
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
  display: 'swap',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lora.variable} ${lora.className}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}

export default MyApp