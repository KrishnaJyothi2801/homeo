import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/oswald/200.css"
import "@fontsource/oswald/300.css"
import "@fontsource/oswald/400.css"
import "@fontsource/oswald/500.css"

import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
