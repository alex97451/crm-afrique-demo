'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, MessageCircle, Store, Globe } from 'lucide-react'

export default function DashboardContent({ user }: { user: { phone?: string } }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-blue-900">Salon Bella Coiffure</h1>
          <p className="text-blue-700">Bienvenue {user.phone?.slice(-10)}</p>
        </header>

        <div className="grid grid-cols-2 gap-4 my-8">
          <Card><CardContent className="p-6 text-center"><p className="text-3xl font-bold text-blue-900">487 000</p><p>CA ce mois</p></CardContent></Card>
          <Card><CardContent className="p-6 text-center"><p className="text-3xl font-bold text-blue-900">124</p><p>Clients</p></CardContent></Card>
        </div>

        <Card className="mb-6">
          <CardContent className="grid grid-cols-2 gap-4 p-6">
            <Button size="lg" className="h-24 text-lg"><Users className="w-8 h-8 mr-2"/>Nouveau client</Button>
            <Button size="lg" className="h-24 text-lg bg-green-600"><MessageCircle className="w-8 h-8 mr-2"/>WhatsApp</Button>
            <Button size="lg" className="h-24 col-span-2 text-lg bg-linear-to-r from-blue-600 to-cyan-600"><Store className="w-8 h-8 mr-2"/>Marquer une vente</Button>
          </CardContent>
        </Card>

        <Card className="bg-linear-to-r from-blue-600 to-cyan-600 text-white">
          <CardContent className="p-8 text-center">
            <Globe className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold mb-3">Mini-site prêt !</h3>
            <p className="text-lg mb-6">bellacoiffure.afrique.pro</p>
            <Button variant="secondary" size="lg">Voir le mini-site →</Button>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-blue-600 mt-8">
          Démo live réalisée en 3h – Next.js 15 + Supabase + PWA – Alexandre
        </p>
      </div>
    </div>
  )
}