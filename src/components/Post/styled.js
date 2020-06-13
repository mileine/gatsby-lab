import styled from "styled-components"
import media from "styled-media-query"

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 3rem 2rem 0;
  ${media.lessThan("large")`
    padding: 2rem .8rem; 
  `}
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0 1.6rem;
  margin: 1rem auto;
  ${media.lessThan("medium")`
    font-size: 1.4rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 200;
  padding: 0 1.4rem;
`

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 100;
  padding: 0 1.4rem;
`
export const PostTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : "var(--highlight)"};
  width: min-content;
  color: #fff;
  display: flex;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  padding: .2rem 1rem;
  font-size: 1rem;
  margin-bottom: 1.4rem;
  margin-left: 1.4rem; 
`