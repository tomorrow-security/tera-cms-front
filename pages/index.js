import Head from 'next/head'

import Hero from '../components/organisms/Hero'

export default function Home() {
  return (
    <>

      <Head>
        <title>Tera Campus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>

    </>
  )
}
