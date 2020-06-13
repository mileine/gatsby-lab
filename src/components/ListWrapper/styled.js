import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  margin-top: 4rem;
  margin-bottom: 5.7rem;
  background-color: var(--background);
  display: flex;
  flex-wrap: wrap;
`
export const ListItem = styled.section`
  box-sizing: border-box;
  width: 25%;
  display: flex;
  border-right: 1px dotted var(--borders);
  border-bottom: 1px dotted var(--borders);
  &:nth-child(4n){
    border-right: none;
  }
  ${media.lessThan("large")`
    width: 50%;
    align-items: flex-start;
    &:nth-child(2n) {
      border-right: none;
    }
  `}
  ${media.lessThan("medium")`
    width: 100%;
    align-items: flex-start;
    border-right: none !important;
  `}
`