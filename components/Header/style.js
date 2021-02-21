import styled from '@emotion/styled'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
`

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const NavItem = styled.li`
  display: inline-block;
  padding: 2rem;

  & a {
    color: #000;

    &:hover {
      text-decoration: none;
    }
  }
`
