import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  margin-top: 4rem;
  padding: 3rem;
  ${media.lessThan("large")`
    padding: 2rem 2rem 0 2rem;
  `}
`
export const PostContent = styled.section`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 0 3rem;
  margin-bottom: 9rem;
  ${media.lessThan("large")`
    padding: 2rem;
  `}
`
export const PostTitle = styled.h1`
  font-size: 1.6rem;
  margin: 1rem auto;
  ${media.lessThan("medium")`
    font-size: 1.4rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.2rem;
  font-weight: 200;
`

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 100;
`
export const PostTag = styled(AniLink)`
  align-items: center;
  background: ${props => props.background ? `var(${props.background})` : "var(--highlight)"};
  width: fit-content;
  color: #fff;
  display: flex;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  padding: .2rem 1rem;
  font-size: 1rem;
  margin-bottom: 1.4rem;
  text-decoration: none;
`