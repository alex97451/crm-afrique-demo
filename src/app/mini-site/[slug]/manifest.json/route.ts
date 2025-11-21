import { NextRequest, NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase-server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: business } = await supabaseServer()
    .from('businesses')
    .select('name, location')
    .eq('slug', slug)
    .single()

  const name = business?.name || 'Mini-site'
  const description = business ? `Mini-site de ${business.name} – ${business.location}` : 'Mini-site'

  return NextResponse.json({
    name,
    short_name: name,
    description,
    start_url: `/mini-site/${slug}`,
    scope: `/mini-site/${slug}`,
    display: 'standalone',
    background_color: '#eff6ff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' },
    ],
  })
}