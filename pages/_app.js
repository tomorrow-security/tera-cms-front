import '../styles/globals.css'

import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"

import Analytics from "../componentsDraft/atoms/Analytics"
import Footer from "../componentsDraft/organisms/Footer"
import Header from "../componentsDraft/organisms/Header"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
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
