import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  ${media.lessThan("large")`
    padding: 5rem .8rem; 
  `}
`

export const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  ${media.lessThan("large")`
    font-size: 1.8rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0 1.4rem;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0 1.4rem;
  ${media.lessThan("large")`
    padding: 1rem; 
  `}
`