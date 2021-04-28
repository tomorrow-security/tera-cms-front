import 'tailwindcss/tailwind.css'

import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
