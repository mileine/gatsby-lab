import styled from "styled-components"

export const TopbarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: var(--topbarBackground);
  width: 100vw;
  color: var(--white);
  padding: .5rem;
` 
export const TopbarLinks = styled.div`
  display: flex;
  align-items: center;
`