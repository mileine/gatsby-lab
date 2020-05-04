import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  
  background-color: var(--borders);
  border-bottom: 1px solid var(--borders);
  display: grid;
  grid-area: posts;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  min-height: calc(100vh - 6rem);
  

  ${media.lessThan("large")`
    padding: 0;
    display: flex;
    flex-direction: column;
  `}
`