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
        <p className="p-10 font-light">
          Some fucking text for it to make sense! Now, I have to install Tailwind css next. Let's see. <br />
          Done! TailwindCSS is on. After version 3.0 it was updated to JIT, so it's fully on!.
        </p>
        
      </main>

      <Footer />
    </div>
  )
}
