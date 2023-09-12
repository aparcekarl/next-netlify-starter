import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="Proof of COncept for Bug Bounty Report">
          Proof of COncept for Bug Bounty Report</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
