import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const FooterWrapper = styled.footer`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  padding: 0 1rem;
  justify-content: center;
  ${media.lessThan("medium")`
    justify-content: space-between;
  `}
  ${media.lessThan("small")`
    justify-content: center;
  `}
`

export const FooterGroup = styled.div`
  display: flex;
`

export const FooterLink = styled(AniLink)`
  display: flex;
`

export const FooterItem = styled.span`
  &.menu-links {
    display: none;
    ${media.lessThan("medium")`
      display: block;
    `}
  }
  ${media.lessThan("small")`
    &.social-links {
      display: none;
    }
  `}
`