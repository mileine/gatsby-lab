import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  margin-bottom: 3rem;
  margin-top: 4rem;
  background-color: var(--background);
  display: flex;
  flex-wrap: wrap;
  &.category-page {
    margin-top: 0;
  }
`
export const ListItem = styled.section`
  box-sizing: border-box;
  width: 25%;
  display: flex;
  align-items: stretch;
  border-right: 1px dotted var(--borders);
  border-bottom: 1px dotted var(--borders);
  &:nth-child(4n){
    border-right: none;
  }
  ${media.lessThan("large")`
    width: 50%;
    &:nth-child(2n) {
      border-right: none;
    }
  `}
  ${media.lessThan("medium")`
    width: 100%;
    border-right: none !important;
  `}
`
export const ListInfo = styled.p`
  color: var(--texts);
  background: var(--listInfoBackground);
  border-bottom: 1px dotted var(--borders);
  margin-top: 4rem;
  font-size: 0.8rem;
  padding: 1rem 1rem;
`