import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import Image from 'next/image'

export default function NavbarUI () {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
          width={80}
          height={80}
          alt="Pokémon"
        />
        <p className="font-bold text-inherit">Pokémon</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            Favoritos
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
