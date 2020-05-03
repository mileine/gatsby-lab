import styled from 'styled-components'
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const LayoutMain = styled.main`
  background: var(--background);
  padding: 0;
  width: 100%;
  margin-top: 3rem;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
    flex-direction: column;
    padding: 0;
  }  
`