import { type SmallPokemon } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function PokeCard ({ pokemon }: { pokemon: SmallPokemon }) {
  return (
    <div className="w-full border text-card-foreground mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="">
        <Image
          className="mx-auto"
          src={pokemon.img}
          alt="Pokemon image"
          width={200}
          height={200}
          style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
        <div className="p-8">
          <h3 className="uppercase tracking-wide text-indigo-500 font-semibold text-center">
            {pokemon.name}
          </h3>
          <div className="flex items-center justify-center p-2">
            <Link
              className="text-emerald-500 hover:text-emerald-700"
              href={`/name/${pokemon.name}`}
            >
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
