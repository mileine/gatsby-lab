import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const LayoutMain = styled.main`
  background: var(--background);
  padding: 0;
  width: 100%;
  margin-top: 3.5rem;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
    flex-direction: column;
    padding: 0;
  }  
`