import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700', '500', '300'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Newsletter',
  description: 'Se inscreva para receber atualizações semanais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
