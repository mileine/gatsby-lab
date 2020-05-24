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
    color: var(--menuItemHover);
  }
`

export const ProfileAuthor =  styled.div`
  font-size: 1.6rem;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const ProfilePosition = styled.small`
  font-size: .8rem;
  font-weight: 300;
  margin-right: 2rem;
  display: none;
  text-align: right;
  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileTitle = styled.h1`
  font-size: 1.6rem;
  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const ProfileDescription = styled.small`
  font-size: .8rem;
  font-weight: 300;
  line-height: 1.4;
` 
export const ProfileIcon = styled.span`
  width: 40px;
` 