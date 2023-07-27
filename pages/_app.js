import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { UserProvider } from "../context/UserContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}
