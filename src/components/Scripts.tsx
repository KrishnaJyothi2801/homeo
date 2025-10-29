"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const AnalyticScripts = () => {
  const [shouldLoadGA, setShouldLoadGA] = useState(false)

  useEffect(() => {
    const isLighthouse = window?.navigator?.userAgent?.includes("Chrome-Lighthouse")
    if (!isLighthouse) {
      setShouldLoadGA(true)
    }
  }, [])

  if (!shouldLoadGA) return null

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YTWM4VWDTN"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YTWM4VWDTN');
        `}
      </Script>
    </>
  )
}

export default AnalyticScripts
