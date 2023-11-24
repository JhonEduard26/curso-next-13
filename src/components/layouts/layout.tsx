import Head from 'next/head'
import NavbarUI from '../ui/navbar'

export default function Layout ({ children, title }: { children: React.ReactNode, title?: string }) {
  return (
    <>
      <Head>
        <title>{ title ?? 'Pokemon App' }</title>
        <meta name="author" content="jhoneduard26" />
        <meta name="description" content="Información sobre el pokemon {...}" />
        <meta name="keywords" content="pokemon, monstruos de bolsillo. {...}" />
      </Head>
      <NavbarUI />

      <main className="p-12">
        {children}
      </main>
    </>
  )
}
