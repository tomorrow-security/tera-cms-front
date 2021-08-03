import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as fbp from '../../lib/fpixel'


const FacebookPixel = ({ children }) => {
  const router = useRouter()

  const handleRouteChange = () => {
    fbp.pageview()
  }

  useEffect(() => {
    // This pageview only trigger first time (it is important for Pixel to have real information)
    fbp.pageview()

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return children
}

export default FacebookPixel
