"use client"
import { useEffect, useState } from 'react'
import { supabaseBrowser } from '@/lib/supabase-client'
import AuthGuard from '@/components/AuthGuard'
import DashboardStats from '@/components/DashboardStats'
import QuickActions from '@/components/QuickActions'
import MiniSitePreview from '@/components/MiniSitePreview'

export default function Dashboard() {
  const [business, setBusiness] = useState<null | { name: string; ca_month: number; clients_count: number; slug: string }>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const match = document.cookie.match(/(?:^|; )demo_phone=([^;]+)/)
        const digits = match ? decodeURIComponent(match[1]) : ''
        const phone = digits ? `+225${digits}` : ''
        if (phone) {
          const { data } = await supabaseBrowser
            .from('businesses')
            .select('name, ca_month, clients_count, slug')
            .eq('phone', phone)
            .single()
          if (data) setBusiness(data)
        }
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  if (loading) return <div className="text-center py-20 text-2xl">Chargement...</div>
  if (!business) return <div className="text-center py-20 text-2xl">Veuillez vous connecter</div>

  const target = 600000
  const percent = Math.min(100, Math.round((business.ca_month / target) * 100))

  return (
    <AuthGuard>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 text-white font-black grid place-items-center">
                {business.name.slice(0, 1)}
              </div>
              <div className="flex-1">
                <div className="text-3xl sm:text-4xl font-black text-blue-900">{business.name}</div>
                <div className="text-sm sm:text-base text-blue-800/80">Tableau de bord en temps réel</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <DashboardStats ca={business.ca_month} clients={business.clients_count} />
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 sm:p-8">
              <div className="text-sm font-semibold text-blue-800/80">Rendez-vous ce mois</div>
              <div className="mt-2 text-4xl sm:text-5xl font-black text-blue-900">32</div>
              <div className="mt-3 text-sm text-blue-700/70">+8% vs dernier mois</div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-6 sm:p-8">
              <div className="text-sm font-semibold text-blue-800/80">Objectif CA mensuel</div>
              <div className="mt-2 text-3xl sm:text-4xl font-black text-blue-900">{business.ca_month.toLocaleString()} Fcfa</div>
              <div className="mt-4 h-3 rounded-full bg-blue-100">
                <div className="h-3 rounded-full bg-blue-600" style={{ width: `${percent}%` }} />
              </div>
              <div className="mt-2 text-sm text-blue-700/70">{percent}% de l'objectif ({target.toLocaleString()} Fcfa)</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8 mb-8">
            <QuickActions />
          </div>

          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-8">
            <MiniSitePreview name={business.name} slug={business.slug} />
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}