import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ALEJANDRO SETA | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is the development test of files" />
        <p className="description">
          Some fucking text for it to make sense! Now, I have to install Tailwind css next. Let's see
        </p>
      </main>

      <Footer />
    </div>
  )
}
