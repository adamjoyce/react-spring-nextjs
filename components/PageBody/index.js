import {
  Container
} from './style'

export default function PageBody ({ bgColor, children }) {
  return (
    <Container bgColor={bgColor}>{children}</Container>
  )
}
