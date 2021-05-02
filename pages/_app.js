import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
