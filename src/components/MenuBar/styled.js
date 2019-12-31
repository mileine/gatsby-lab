import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

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
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
    height: auto;
  `}
`

export const MenuBarLink = styled(AniLink)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: #d4d400;
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
