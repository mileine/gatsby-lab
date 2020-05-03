import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const MenuBarWrapper = styled.div`
  align-items: center;
  border-left: 1px solid var(--borders);
  display: flex;

  ${media.lessThan("large")`
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    width: 100%;
    bottom: 0;
    padding: 0;
  `}
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
  color: var(--background);
  cursor: pointer;
  height: 3rem;
  padding: .7rem;
  position: relative;
  width: 3rem;

  &.light {
    color: #d4d400;
    &:hover {
      color: var(--texts);
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  &:hover {
    color: var(--white);
  }
`
