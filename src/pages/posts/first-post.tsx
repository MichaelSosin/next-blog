import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'

const FirstPost = () => {
  return <Layout>
    <Head>
      <title>First post</title>
    </Head>
    <h1>First post</h1>
    <Link href='/'>to home</Link>
  </Layout>
}

export default FirstPost
