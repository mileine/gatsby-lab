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
  &:hover {
    color: var(--menuItemHover);
  }
  ${media.lessThan("large")`
    display: flex;
    text-align: left;
  `}
`

export const ProfileAuthor =  styled.div`
  font-size: 1.4rem;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
`

export const ProfilePosition = styled.small`
  font-size: .7rem;
  font-weight: 300;
  display: none;
  text-align: right;
  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 2px;
  margin-right: .8rem;
  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const ProfileDescription = styled.span`
  font-size: .8rem;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: .1rem;
  ${media.lessThan("large")`
    font-size: .8rem;
  `}
  ${media.lessThan("medium")`
    max-width: 145px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
` 
export const ProfileIcon = styled.span`
  width: 50px;
`