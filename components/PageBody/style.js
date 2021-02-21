import styled from '@emotion/styled'

export const Container = styled.div`
  align-items: center;
  color: #ccc;
  display: flex;
  background: ${(props) => props.bgColor};
  height: calc(100vh - 5.5rem);
  justify-content: center;
  width: 100%;
`
