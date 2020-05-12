import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  color: var(--white);
  display: flex;
`
export const ProfileLink = styled(AniLink)`
  color: var(--white);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  align-items: center;
  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--white);
  }
  &.light {
    &:hover {
      color: var(--text);
    }
  }
`

export const ProfileAuthor =  styled.h1`
  font-size: 1.6rem;
  margin: 0 0 0 10px;

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const ProfilePosition = styled.small`
  display: none;
  font-size: .8rem;
  font-weight: 300;
  margin-right: 2rem;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.span`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  display: none;
` 