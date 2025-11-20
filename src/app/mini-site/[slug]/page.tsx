import { supabaseServer } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, MapPin, Clock, Star } from 'lucide-react'

export default async function MiniSite({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: business } = await supabaseServer()
    .from('businesses')
    .select('name, location, phone')
    .eq('slug', slug)
    .single()

  if (!business) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-3xl font-bold text-gray-600">
        Site non trouvé
      </div>
    )
  }

  const cleanPhone = business.phone.replace(/\D/g, '')
  const waLink = `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(business.name)}%20!%20J%27ai%20vu%20votre%20site%20et%20je%20souhaite%20prendre%20rendez-vous`

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50">

     
      <header className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600 text-white pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-2xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight drop-shadow-2xl">
            {business.name}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl opacity-90 flex items-center justify-center gap-2">
            <MapPin className="w-7 h-7" />
            {business.location}
          </p>
        </div>
      </header>

      
      <section className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Nos spécialités</h2>
          <div className="grid grid-cols-2 gap-4 text-lg font-medium text-blue-800">
            {['Tresses', 'Coiffure', 'Soins', 'Produits', 'Lissage', 'Coloration'].map((s) => (
              <div key={s} className="flex items-center justify-center gap-2 bg-blue-50 rounded-2xl py-4">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="space-y-6">

         
          <Button
            asChild
            className="w-full h-20 sm:h-24 bg-green-500 hover:bg-green-600 shadow-2xl rounded-3xl flex items-center justify-center transform hover:scale-105 transition-all"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="flex w-full h-full items-center justify-center gap-3 sm:gap-5 px-4 text-xl sm:text-3xl font-bold whitespace-nowrap"
            >
              <MessageCircle className="w-10 h-10 sm:w-14 sm:h-14" />
              Prendre rendez-vous WhatsApp
            </a>
          </Button>

         
          <Button
            asChild
            className="w-full h-20 text-2xl font-bold bg-blue-600 hover:bg-blue-700 shadow-2xl rounded-3xl flex items-center justify-center gap-4"
          >
            <a href={`tel:${business.phone}`}>
              <Phone className="w-10 h-10" />
              Appeler maintenant
            </a>
          </Button>
        </div>

       
        <div className="mt-12 bg-white/70 backdrop-blur rounded-3xl p-6 text-center shadow-xl">
          <div className="flex items-center justify-center gap-3 text-blue-900">
            <Clock className="w-8 h-8" />
            <div>
              <p className="text-xl font-bold">Ouvert 7j/7</p>
              <p className="text-lg">9h00 – 19h00</p>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-blue-900 text-white text-center py-8 text-sm">
        <p>© {new Date().getFullYear()} {business.name} • Site offert avec votre CRM</p>
      </footer>
    </div>
  )
}