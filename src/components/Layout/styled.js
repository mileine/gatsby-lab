import styled from 'styled-components'

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const LayoutMain = styled.main`
  background: var(--background);
  padding: 0;
  width: 100%;
  min-height: 100vh;
  margin-top: 4rem;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
    flex-direction: column;
    padding: 0;
  }  
`