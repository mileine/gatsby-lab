import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./Hit"
import * as S from "./styled"
import SearchImgLightBg from "../../images/search-by-algolia-light-background.png"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search= () => (
  <S.SearchWrapper>
    <InstantSearch
      appId={algolia.appId}
      apiKey={algolia.searchOnlyApiKey}
      indexName={algolia.indexName}
      searchClient={searchClient}
    >
    <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
    <S.SearchStatsWrapper>
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
        />
      <img src={SearchImgLightBg} alt="powered by Algolia Search" height="24" width="168"/>
      </S.SearchStatsWrapper>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
