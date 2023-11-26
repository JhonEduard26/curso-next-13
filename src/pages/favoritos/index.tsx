import Layout from '@/components/layouts/layout'
import PokeCard from '@/components/ui/poke-card'
import { type SmallPokemon } from '@/types'
import { getFavorites } from '@/utils/localFavorites'
import { useEffect, useState } from 'react'

export default function Favoritos () {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  return (
    <Layout title="Favoritos">
      <h1 className="mb-12 f-2xl font-bold text-center">
        Pokemon Favoritos
      </h1>
      {
        favorites.length === 0 && (
          <p className="text-center">
            No tienes ningún Pokémon como favorito
          </p>
        )
      }
      {
        favorites.length > 0 && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              favorites.map((pokemon: SmallPokemon) => (
                <PokeCard key={pokemon.name} pokemon={pokemon} />
              ))
            }
          </ul>
        )
      }

    </Layout>
  )
}
