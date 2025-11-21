// src/app/(auth)/login/page.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Phone, MessageCircle, CheckCircle, Info } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [phone, setPhone] = useState('0712345678')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const router = useRouter()

  const sendOtp = () => { setStep('otp') }

  const verifyOtp = () => {
    if (otp.length === 6) {
      const digits = phone.replace(/\D/g, '')
      try {
        document.cookie = `demo_phone=${digits}; path=/; max-age=86400`
      } catch {}
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center p-4">
      
     
      <div className="w-full max-w-md">

        <Card className="overflow-hidden border-0 shadow-2xl">
          <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 space-y-8 text-center">

          
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-bold px-5 py-3 rounded-full text-sm">
              <CheckCircle className="w-5 h-5" />
              Démo 100 % fonctionnelle
            </div>

            <Phone className="w-20 h-20 mx-auto text-white" />

            <h1 className="text-3xl sm:text-4xl font-black text-white">
              {step === 'phone' ? 'Connexion par SMS' : 'Entrez le code'}
            </h1>

           
            {step === 'otp' && (
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-5 text-left">
                <p className="text-lg font-bold text-blue-900 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  En démo : tapez n’importe quoi !
                </p>
                <p className="text-sm mt-2">
                  Exemples : <span className="font-bold text-green-600">111111</span> • <span className="font-bold text-green-600">123456</span> • <span className="font-bold text-green-600">000000</span>
                </p>
              </div>
            )}

            
            <div className="space-y-6">
              {step === 'phone' ? (
                <>
                  <div>
                    <Label className="text-lg text-white">Numéro de téléphone</Label>
                    <div className="flex mt-3">
                      <span className="inline-flex items-center px-4 bg-white/20 text-white rounded-l-2xl text-lg">+225</span>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-l-none h-14 text-xl font-mono bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white"
                        placeholder="0712345678"
                      />
                    </div>
                  </div>

                  <Button onClick={sendOtp} className="w-full h-16 text-2xl font-bold bg-white text-blue-600 hover:bg-gray-100 rounded-2xl shadow-xl">
                    Recevoir le code SMS
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    <Label className="text-lg text-white">Code à 6 chiffres</Label>
                    <Input
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="111111"
                      className="h-20 text-5xl text-center font-mono tracking-widest letter-spacing-wide bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-white mt-3"
                      maxLength={6}
                    />
                  </div>

                  <Button
                    onClick={verifyOtp}
                    disabled={otp.length !== 6}
                    className="w-full h-16 text-2xl font-bold bg-green-500 hover:bg-green-400 disabled:opacity-50 rounded-2xl shadow-xl"
                  >
                    Accéder au dashboard
                  </Button>
                </>
              )}
            </div>

           
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 space-y-4">
              <p className="text-3xl font-black text-white">4 200 € HT</p>
              <p className="text-lg text-white/90">Livré en 4 semaines • Paiement échelonné</p>
              
              <Button asChild className="w-full min-h-14 bg-green-500 hover:bg-green-400 font-bold rounded-2xl whitespace-normal flex-wrap">
                <a
                  href="https://wa.me/33751231081"
                  target="_blank"
                  className="flex flex-col sm:flex-row w-full h-full items-center justify-center gap-1 sm:gap-2 px-3 py-2 text-sm sm:text-xl leading-tight text-center whitespace-normal break-words text-white"
                >
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-0 sm:mr-3" />
                  Alexandre – WhatsApp (réponse immédiate)
                </a>
              </Button>
            </div>

            <p className="text-xs text-white/70">
              Démo codée en live pour vous • Tout fonctionne déjà
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
