import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const LayoutMain = styled.main`
  background: var(--background);
  width: 100%;
  padding: 0;
  min-height: 100vh;
`
export const LayoutMainContent = styled.section`
  margin-top: 4rem;
  padding: 3rem;
  ${media.lessThan("large")`
    padding: 2rem 3rem;
  `}
`