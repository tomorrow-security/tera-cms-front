import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as fbp from '../../lib/fpixel'
import * as gtag from '../../lib/gtag'


const Analytics = ({ children }) => {
  const router = useRouter()

  const handleRouteChange = (url) => {
    gtag.pageview(url)
    fbp.pageview()
  }

  useEffect(() => {
    // This pageview only trigger first time (it is important for Facebook pixel to have real information)
    fbp.pageview()

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return children
}

export default Analytics
