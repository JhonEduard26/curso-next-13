import Head from 'next/head'
import NavbarUI from '../ui/navbar'

export default function Layout ({ children, title }: { children: React.ReactNode, title?: string }) {
  return (
    <>
      <Head>
        <title>{title ?? 'Pokemon App'}</title>
        <meta name="author" content="jhoneduard26" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`pokemon, pokedex, ${title}`} />

        <meta property="og:title" content={`Pokemon ${title}`} />
        <meta property="og:description" content={`Información sobre el pokemon ${title}`} />
        <meta property="og:image" content="https://hips.hearstapps.com/hmg-prod/images/pokemon-1671869502.jpg?crop=0.7509333333333333xw:1xh;center,top&resize=1200:*" />
      </Head>
      <NavbarUI />

      <main className="p-12">
        {children}
      </main>
    </>
  )
}
