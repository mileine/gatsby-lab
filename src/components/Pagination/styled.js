import styled from 'styled-components'
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PaginationWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  position: fixed;
  bottom: 3rem;
  width: 100%;
  z-index: 5;
  ${media.lessThan("medium")`
    bottom: 0;
  `}
`

export const PaginationStatus = styled.p`
  color: var(--highlight);
  font-size: .8rem;
  padding: 1rem 2rem;
  min-width: 50%;
  &.last {
    text-align: right;
  }
`

export const PaginationLink = styled(AniLink)`
  align-items: center;
  background: var(--mediumBackground);
  color: var(--highlight);
  display: flex;
  padding: 1rem 2rem;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: var(--borders);
  }
  &.previous {
    align-self: flex-start;
  }
  &.previous:only-child {
    border-right: none;
  }
  &.next {
    justify-content: flex-end;
  }
  &.next:only-child {
    margin-left: 50%;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`