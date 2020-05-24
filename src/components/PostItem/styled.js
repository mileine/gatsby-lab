import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
  color: #8899a6;
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  background: var(--background);
  border-bottom: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 3rem;
  width: 100%;
  transition: background 1s;
  body#grid & {
    border: none;
    padding: 2rem 1rem;
  }

  &:hover {
    background: var(--postItemBackground);
  }

  ${media.lessThan("large")`
    
    align-items: flex-start;
    padding: 1.5rem 1rem; 
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background ? props.background : "var(--highlight)"};

  color: #fff;
  display: flex;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  padding: .2rem 1rem;
  min-width: auto;
  min-height: auto;
  font-size: 1rem;
  margin-bottom: .5rem; 

  body#grid & {
    margin-right: 1rem;
  }

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

  body#grid & {
    line-height: 1.1;
  }

  ${media.lessThan("large")`
    margin-left: 0;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

