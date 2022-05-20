import FreshCoffeProvider from '../context/FreshCoffeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <FreshCoffeProvider>
      <Component {...pageProps} />
    </FreshCoffeProvider>
  )
}

export default MyApp
