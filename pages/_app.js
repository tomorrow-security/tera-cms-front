import '../styles/globals.css';

import { Rubik } from '@next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		if (router.isReady){
			if (!localStorage.getItem('tc_ft_source')) localStorage.setItem('tc_ft_source', router.query.utm_source || 'direct');
			if (!localStorage.getItem('tc_ft_medium')) localStorage.setItem('tc_ft_medium', router.query.utm_medium || 'site-web');
			if (!localStorage.getItem('tc_ft_campaign')) localStorage.setItem('tc_ft_campaign', router.query.utm_campaign || 'none');
		}
	}, [router.isReady]);

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>Tera Campus - École hybride d'informatique</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`${rubik.variable} font-sans flex flex-col`}>
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
