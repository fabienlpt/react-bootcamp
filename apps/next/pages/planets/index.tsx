import { HeaderComponent } from 'app/components/header'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>SpaceCraft</title>
      </Head>
      <HeaderComponent />
    </>
  )
}
