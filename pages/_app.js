import '../styles/globals.css'

import Head from "next/head"
import { useRouter } from 'next/router'
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import Footer from "../componentsDraft/organisms/Footer"
import Header from "../componentsDraft/organisms/Header"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		if (router.isReady){
			if (!localStorage.getItem('tc_ft_source')) localStorage.setItem('tc_ft_source', router.query.utm_source || 'direct')
			if (!localStorage.getItem('tc_ft_medium')) localStorage.setItem('tc_ft_medium', router.query.utm_medium || 'site-web')
			if (!localStorage.getItem('tc_ft_campaign')) localStorage.setItem('tc_ft_campaign', router.query.utm_campaign || 'none')
		}
	}, [router.isReady])

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>École hybride d'informatique - Tera Campus</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col min-h-screen">
				<Header />
				<div className="flex-grow z-0">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</QueryClientProvider>
	)
}

export default MyApp
