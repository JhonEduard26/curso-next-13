import Layout from '@/components/layouts/layout'
import { type GetStaticProps } from 'next'

export default function Home () {
  return (
    <Layout title="Listado de Pokémon">
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
