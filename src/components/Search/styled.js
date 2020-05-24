import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox{
    padding: 0.5rem 3rem;
    ${media.lessThan("large")`
      padding: 0.5rem 1rem; 
    `}
  }
  .ais-Stats {
    color: var(--texts);
    margin-bottom: 0.5rem
  }
  
  .ais-Hits-list {
    border-top: 1px dotted var(--borders);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6rem;
  }
  .ais-Hits-item {
    background-color: var(--background);
    display: flex;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
export const SearchStatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 48px;  
  padding: 0.5rem 3rem;
  ${media.lessThan("large")`
    padding: 0.5rem 1rem; 
  `}
  ${media.lessThan("medium")`
      flex-direction: column; 
    `}
`