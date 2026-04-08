import { HomePage } from '@/feature/home/view/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Portfolio',
  description: 'Desenvolvedor de Software focado em performance e custo inteligente'
}

export default function Page() {
  return <HomePage />
}
