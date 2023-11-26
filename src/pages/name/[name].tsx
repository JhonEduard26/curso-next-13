import pokeApi from '@/api'
import Layout from '@/components/layouts/layout'
import { type PokemonListResponse, type Pokemon } from '@/types'
import { isFavorite, toggleFavorite } from '@/utils/localFavorites'
import { Button } from '@nextui-org/react'
import clsx from 'clsx'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const bgTypes: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-500',
  grass: 'bg-green-500',
  ice: 'bg-blue-200',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-blue-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-700',
  rock: 'bg-gray-700',
  ghost: 'bg-purple-700',
  dark: 'bg-gray-900',
  dragon: 'bg-blue-900',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300'
}

export default function PokemonNamePage ({ pokemon }: { pokemon: Pokemon }) {
  const [isInFav, setIsInFav] = useState<boolean>(false)

  useEffect(() => {
    setIsInFav(isFavorite(pokemon.name))
  }, [pokemon.name])

  return (
    <Layout title={pokemon.name}>
      <div className="relative max-w-sm mx-auto border bg-white rounded-xl shadow-md overflow-hidden">
        <Button
          variant="bordered"
          className="absolute right-2 top-2"
          title="Guardar en favoritos"
          aria-label="Guardar en favoritos"
          onClick={() => {
            toggleFavorite({
              name: pokemon.name,
              img: pokemon.sprites.other?.['official-artwork'].front_default ?? pokemon.sprites.front_default,
              id: pokemon.id
            })
            setIsInFav(!isInFav)
          }}
        >
          {
            isInFav ? '❤️' : '🤍'
          }
        </Button>
        <div className="flex flex-col items-center">
          <Image
            className="mx-auto"
            src={pokemon.sprites.other?.['official-artwork'].front_default ?? pokemon.sprites.front_default}
            alt="Pokemon image"
            width={200}
            height={200}
            style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
          <div className="mb-2">
            <h3 className="uppercase tracking-wide text-indigo-500 font-semibold text-center">
              {pokemon.name}
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <span className="text-center">Tipo</span>
            </div>
            <div className="flex gap-2 mb-6 uppercase">
              {
                pokemon.types.map(({ type }) => (
                  <div key={type.name} className={clsx(
                    'text-white transition-colors px-2 py-1 rounded-full',
                    {
                      [bgTypes[type.name]]: bgTypes[type.name]
                    }
                  )}>
                    <span key={type.name} className="px-2 py-1">
                      {type.name}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mb-12">
            <p>❤️ HP: <span className="font-semibold">{pokemon.stats[0].base_stat}</span></p>
            <p>⚔️ Ataque: <span className="font-semibold"> {pokemon.stats[1].base_stat}</span></p>
            <p>🛡️ Defensa:  <span className="font-semibold">{pokemon.stats[2].base_stat}</span></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  const paths = data.results.map(({ name }) => ({
    params: { name }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

  const pokemon = {
    id: data.id,
    sprites: data.sprites,
    name: data.name,
    types: data.types,
    stats: data.stats
  }

  return {
    props: { pokemon }
  }
}
