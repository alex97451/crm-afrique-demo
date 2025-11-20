import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

type Props = { name: string; slug: string }

export default function MiniSitePreview({ name, slug }: Props) {
  const url = `/mini-site/${slug}`

  return (
    <Card className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-2xl overflow-hidden">
      <CardContent className="p-8 text-center space-y-6">
        <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-bold">Votre mini-site est en ligne !</h3>
        <p className="text-lg sm:text-xl opacity-90 break-all">
          {name.toLowerCase().replace(/\s+/g, '')}.afrique.pro
        </p>
        <Button asChild size="lg" variant="secondary" className="w-full h-14 text-lg sm:text-xl rounded-2xl">
          <a href={url} target="_blank" rel="noopener">
            Voir le site
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}