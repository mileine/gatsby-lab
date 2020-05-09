import styled from "styled-components"
import media from "styled-media-query"

export const ListWrapper = styled.section`
  margin-bottom: 7rem;
  background-color: var(--borders);
  border-bottom: 1px solid var(--borders);
  display: grid;
  grid-area: posts;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  ${media.lessThan("large")`
    padding: 0;
    display: flex;
    flex-direction: column;
  `}
`