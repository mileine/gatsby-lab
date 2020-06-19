import styled from "styled-components"
import media from "styled-media-query"

export const TopbarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: var(--topbarBackground);
  width: 100vw;
  color: var(--white);
  padding: .5rem 1rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
` 
export const TopbarLinks = styled.div`
  display: flex;
  align-items: center;
`
export const TopbarItem = styled.span`
  &.menu-links {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
`