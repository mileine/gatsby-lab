import styled from 'styled-components'
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
  background: var(--mediumBackground);
  color: #8899a6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 3rem;
  a {
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--highlight);
    }
  }
  ${media.lessThan("large")`
    padding: 1rem;
    font-size: .8rem;
  `}
`