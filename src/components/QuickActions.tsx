import { Button } from '@/components/ui/button'
import { UserPlus, MessageCircle, Store } from 'lucide-react'

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button className="h-28 sm:h-32 text-lg sm:text-xl bg-blue-600 hover:bg-blue-700 text-white flex flex-col gap-3 rounded-2xl shadow-lg">
        <UserPlus className="w-10 h-10 sm:w-12 sm:h-12" />
        Nouveau client
      </Button>

      <Button className="h-28 sm:h-32 text-lg sm:text-xl bg-green-600 hover:bg-green-700 text-white flex flex-col gap-3 rounded-2xl shadow-lg">
        <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12" />
        WhatsApp
      </Button>

      <Button className="col-span-2 h-28 sm:h-32 text-lg sm:text-xl bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg">
        <Store className="w-10 h-10 sm:w-12 sm:h-12 mr-3" />
        Marquer une vente
      </Button>
    </div>
  )
}