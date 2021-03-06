import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  display: flex;
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  margin-left: .8rem; 
  .active {
    text-decoration: underline;
  }
`

export const MenuLinksLink = styled(AniLink)`
  color: var(--white);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--menuItemHover);
  }
  ${media.lessThan("medium")`
    color: var(--texts);
    &:hover {
      color: var(--highlight);
    }
  `}
`