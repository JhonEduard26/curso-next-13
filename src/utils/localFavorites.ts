interface LocalFavorites {
  name: string
  img: string
  id: number
}

export const toggleFavorite = (pokemon: LocalFavorites) => {
  const favorites: LocalFavorites[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')

  console.log(favorites)

  if (favorites.length === 0) {
    favorites.push({
      name: pokemon.name,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
      id: pokemon.id
    })
  } else {
    const index = favorites.findIndex(favorite => favorite.name === pokemon.name)

    if (index === -1) {
      favorites.push({
        name: pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        id: pokemon.id
      })
    } else {
      favorites.splice(index, 1)
    }
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const isFavorite = (name: string) => {
  const favorites: LocalFavorites[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')
  return favorites.some(favorite => favorite.name === name)
}

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}
