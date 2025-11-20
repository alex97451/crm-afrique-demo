import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, Users } from 'lucide-react'

type Props = { ca: number; clients: number }

export default function DashboardStats({ ca, clients }: Props) {
  return (
    <>
      <Card className="bg-white shadow-xl border-0 overflow-hidden">
        <CardContent className="p-6 text-center">
          <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 text-green-600" />
          <p className="text-3xl sm:text-4xl font-black text-blue-900">
            {ca.toLocaleString()} FCFA
          </p>
          <p className="text-sm sm:text-base text-blue-600 mt-1">CA du mois</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-xl border-0 overflow-hidden">
        <CardContent className="p-6 text-center">
          <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 text-blue-600" />
          <p className="text-3xl sm:text-4xl font-black text-blue-900">
            {clients}
          </p>
          <p className="text-sm sm:text-base text-blue-600 mt-1">Clients actifs</p>
        </CardContent>
      </Card>
    </>
  )
}