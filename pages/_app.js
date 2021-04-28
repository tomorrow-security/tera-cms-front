import 'tailwindcss/tailwind.css'

import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
