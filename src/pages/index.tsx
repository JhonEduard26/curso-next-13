import pokeApi from '@/api'
import Layout from '@/components/layouts/layout'
import { type GetStaticProps } from 'next'
import { type SmallPokemon, type PokemonListResponse } from '@/types'
import PokeCard from '@/components/ui/poke-card'

export default function Home ({ pokemons }: { pokemons: SmallPokemon[] }) {
  return (
    <Layout title="Listado de Pokémon">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map(pokemon => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons = results.map((pokemon, idx) => {
    return {
      ...pokemon,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}
