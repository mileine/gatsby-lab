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
  padding: 0;
`

export const FooterGroup = styled.div`
  display: flex;
`

export const FooterLink = styled(AniLink)`
  display: flex;
`

export const FooterItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: flex;
  height: 3rem;
  padding: .8rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: var(--highlight);
    &:hover {
      color: #e2e240;
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  &:hover {
    color: var(--highlight);
  }
`
