import {
  Navbar,
  NavList,
  NavItem
} from './style'
import Link from '../Link'

export default function Header () {
  return (
    <Navbar>
      <NavList>
        <NavItem><Link href='/'>Home</Link></NavItem>
        <NavItem><Link href='/about'>About</Link></NavItem>
      </NavList>
    </Navbar>
  )
}
