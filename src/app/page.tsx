// src/app/page.tsx 
import { Button } from '@/components/ui/button'
import { MessageCircle, Check } from 'lucide-react'

export default function LandingFinal() {
  const base = (process.env.NEXT_PUBLIC_URL || '').replace(/\/+$/, '')
  const demoLink = `${base}/login`

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-cyan-600 text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
     
      <div className="w-full max-w-md space-y-10 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
          Votre CRM sur-mesure pour TPE africaines
        </h1>

       
        <p className="text-lg sm:text-xl font-light opacity-90">
          Gestion clients • Mini-site auto • WhatsApp • Dashboard CA
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/10 backdrop-blur-lg rounded-3xl p-6 text-left text-base sm:text-lg">
          <div className="flex items-center gap-3">
            <Check className="w-7 h-7 text-green-300 shrink-0" />
            <span>Connexion par SMS</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-7 h-7 text-green-300 shrink-0" />
            <span>Mini-site offert</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-7 h-7 text-green-300 shrink-0" />
            <span>Relances WhatsApp</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-7 h-7 text-green-300 shrink-0" />
            <span>Fonctionne hors ligne</span>
          </div>
        </div>

       
        <div className="space-y-4">
          <p className="text-lg opacity-80">MVP complet livré en 4 semaines maximum</p>
          <p className="text-6xl sm:text-7xl md:text-8xl font-black">4 200 € HT</p>
          <p className="text-base sm:text-lg">
            35 % démarrage • 35 % milieu • 30 % livraison
          </p>
        </div>

       
        <div className="space-y-5 w-full">
          <Button
            asChild
            className="w-full h-20 text-2xl sm:text-3xl font-bold bg-green-500 hover:bg-green-400 shadow-2xl rounded-2xl"
          >
            <a href="https://wa.me/33751231081">
              <MessageCircle className="w-10 h-10 mr-4" />
              WhatsApp maintenant
            </a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="w-full h-16 text-xl sm:text-2xl rounded-2xl"
          >
            <a href={demoLink} target="_blank" rel="noopener">
              Voir la démo live →
            </a>
          </Button>
        </div>

      
        <p className="text-sm opacity-70 pt-8">
          Projet en cours • Démo 100 % fonctionnelle disponible immédiatement
        </p>
      </div>
    </div>
  )
}