import '../styles/globals.css'

import cookies from "cookie-cutter"
import Head from "next/head"
import { useRouter } from 'next/router'
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import Analytics from "../componentsDraft/atoms/Analytics"
import Footer from "../componentsDraft/organisms/Footer"
import Header from "../componentsDraft/organisms/Header"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		if (!cookies.get('tc_ft_source')) cookies.set('tc_ft_source', router.query.utm_source || 'direct')
		if (!cookies.get('tc_ft_medium')) cookies.set('tc_ft_medium', router.query.utm_medium || 'site-web')
		if (!cookies.get('tc_ft_campaign')) cookies.set('tc_ft_campaign', router.query.utm_campaign || 'none')
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<Analytics>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<div className="flex flex-col min-h-screen">
					<Header />
					<div className="flex-grow z-0">
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</Analytics>
		</QueryClientProvider>
	)
}

export default MyApp
