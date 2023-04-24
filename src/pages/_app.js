import AppState from '@/context/app/AppState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  )
}
