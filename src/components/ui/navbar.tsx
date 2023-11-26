import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarUI () {
  return (
    <Navbar>
      <NavbarBrand>
        <Button as={Link} href="/" variant="light">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
            width={66}
            height={66}
            alt="Pokémon"
          />
          <p className="font-bold text-inherit">Pokémon</p>
        </Button>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/favoritos" variant="ghost">
            Favoritos
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
