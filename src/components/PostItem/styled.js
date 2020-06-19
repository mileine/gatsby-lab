import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  box-sizing: border-box;
  width: 100%;
  color: var(--postColor);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  align-items: strech;
  padding: 2rem;
  width: 100%;
  height: 100%;
  ${media.lessThan("large")`
    padding: 1.5rem 1rem;
  `}
  ${media.lessThan("medium")`
    width: 100%;
    padding: 1.5rem 1rem; 
  `}
`

export const PostItemTagLink = styled(AniLink)`
  align-items: center;
  background: ${props => props.background ? props.background : "var(--highlight)"};
  color: var(--white);
  display: flex;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  padding: .2rem 1rem;
  min-width: auto;
  min-height: auto;
  font-size: 1rem;
  margin-bottom: .5rem; 
`

export const PostItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  margin-bottom: .8rem;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    margin-left: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--texts);
`

export const PostItemTitle = styled.h1`
  font-size: 1.4rem;
  margin: 0.5rem 0 1rem;
  line-height: 1.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

