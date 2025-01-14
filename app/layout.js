import './globals.css'
import { Toaster } from 'sonner'
import Header from './components/Header'
import Footer from './components/Footer'
import ClientWrapper from './components/ClientWrapper'

export const metadata = {
  title: 'EcommerceHub - Your One-Stop E-commerce Solution',
  description: 'Find the best products at unbeatable prices',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Toaster position="bottom-right" />
        <Header />
        <ClientWrapper>
          <main className="flex-grow">
            {children}
          </main>
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  )
}

