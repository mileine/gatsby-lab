import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const MenuBarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

export const MenuBarGroup = styled.div`
  display: flex;
`

export const MenuBarLink = styled(AniLink)`
  height: 3rem;
  padding: .7rem;
  position: relative;
  width: 3rem;
  text-align: center;
`

export const MenuBarItem = styled.span`
  color: var(--white);
  cursor: pointer;
  height: 3rem;
  padding: .7rem;
  position: relative;
  width: 3rem;

  &.light {
    color: #d4d400;
    &:hover {
      color: var(--lightHover);
    }
  }

  &.display {
    ${media.lessThan("medium")`
      display: none;
    `}
  }

  &:hover {
    color: var(--menuItemHover);
  }
`
