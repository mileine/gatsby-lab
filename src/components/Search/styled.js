import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  margin-top: 6rem;
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
    margin-bottom: 3rem
  }

  .ais-Hits-item {
    border-bottom: 1px dotted var(--borders);
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border: 1px solid var(--borders);
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
export const AlgoliaLogoWrapper = styled.div`
  &.light {
    display: var(--display-light-logo);
  }
  &.dark {
    display: var(--display-dark-logo)
  }
`
export const CatListWrapper = styled.div`
  display: flex;
  padding: 0.5rem 3rem 1rem 3rem;
  flex-wrap: wrap;
  align-items: center;
  ${media.lessThan("large")`
    padding: 0.5rem 1rem; 
  `}
`

export const CatLink = styled(AniLink)`
  align-items: center;
  background: ${props => props.background ? `var(${props.background})` : "var(--highlight)"};
  color: var(--white);
  display: flex;
  font-size: .8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  padding: .2rem 1rem;
  min-width: auto;
  min-height: auto;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: .5rem;
`