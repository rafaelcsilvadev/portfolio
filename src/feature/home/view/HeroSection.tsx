import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function HeroSection() {
  const t = await getTranslations('home')
  const commonT = await getTranslations('common')

  const identity = t('identity')
  const title = t('title')
  const subtitle = t('subtitle')
  const imageUrl = t('imageUrl')
  
  const primaryAction = {
    label: t('primaryAction.label'),
    href: t('primaryAction.href')
  }
  
  const secondaryAction = {
    label: t('secondaryAction.label'),
    href: t('secondaryAction.href')
  }

  return (
    <section id="home" className="relative min-h-[700px] flex flex-col items-center justify-center px-6 pt-32 pb-24 md:py-0">
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-px w-12 bg-primary"></div>
            <span className="font-label text-primary text-xs uppercase tracking-[0.3em]">{commonT('identityLabel')}: {identity}</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-none tracking-tight">
            {title.split(' ').map((word, i) => i === 1 ? (
              <span key={`${word}-${i}`} className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">{word} </span>
            ) : word + ' ')}
          </h1>

          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed mx-auto md:mx-0">
            {subtitle}
          </p>

          <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              href={primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-lg font-bold shadow-[0_0_30px_rgba(188,0,251,0.3)] hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider text-sm flex items-center gap-2"
            >
              {primaryAction.label} <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </Link>
            <Link 
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-variant/40 backdrop-blur px-8 py-4 rounded-lg font-bold border border-white/5 hover:bg-surface-variant/60 transition-all uppercase tracking-wider text-sm inline-block"
            >
              {secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-xy">
             <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-surface-container">
                <Image
                  src={imageUrl}
                  alt={identity}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  priority
                />
             </div>
          </div>

          <div className="absolute -top-4 -right-4 w-12 h-12 bg-surface-variant/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center shadow-2xl animate-bounce">
            <span className="material-symbols-outlined text-primary text-xl">code</span>
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-surface-variant/80 backdrop-blur-xl rounded-lg border border-white/10 flex items-center justify-center shadow-2xl animate-pulse delay-700">
            <span className="material-symbols-outlined text-secondary text-lg">bolt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
