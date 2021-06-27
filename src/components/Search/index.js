import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import Hit from "./Hit"
import * as S from "./styled"
import SearchImgLightBg from "../../images/search-by-algolia-light-background.svg"
import SearchImgDarkBg from "../../images/search-by-algolia-dark-background.svg"
import getThemeColor from "../../utils/getThemeColor"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => {
  return (
    <S.SearchWrapper>
      <S.CatListWrapper>
        <S.CatLink background='--cat-design' to='/categories/design' cover direction="right" bg={getThemeColor()} duration={0.6}>design</S.CatLink>
        <S.CatLink background='--cat-acessibilidade' to='/categories/acessibilidade' cover direction="right" bg={getThemeColor()} duration={0.6}>acessibilidade</S.CatLink>
        <S.CatLink background='--cat-css' to='/categories/css' cover direction="right" bg={getThemeColor()} duration={0.6}>css</S.CatLink>
        <S.CatLink background='--cat-frontend' to='/categories/frontend' cover direction="right" bg={getThemeColor()} duration={0.6}>frontend</S.CatLink>
        <S.CatLink background='--cat-languages' to='/categories/languages' cover direction="right" bg={getThemeColor()} duration={0.6}>languages</S.CatLink>
        <S.CatLink background='--cat-gatsby' to='/categories/gatsby' cover direction="right" bg={getThemeColor()} duration={0.6}>gatsby</S.CatLink>
        <S.CatLink background='--cat-learning-log' to='/categories/musica' cover direction="right" bg={getThemeColor()} duration={0.6}>learning-log</S.CatLink>
        <S.CatLink background='--cat-life-101' to='/categories/life-101' cover direction="right" bg={getThemeColor()} duration={0.6}>life-101</S.CatLink>
        <S.CatLink background='--cat-career-101' to='/categories/career-101' cover direction="right" bg={getThemeColor()} duration={0.6}>career-101</S.CatLink>
        <S.CatLink background='--cat-cursos' to='/categories/cursos' cover direction="right" bg={getThemeColor()} duration={0.6}>cursos</S.CatLink>
        <S.CatLink background='--cat-misc' to='/categories/misc' cover direction="right" bg={getThemeColor()} duration={0.6}>misc</S.CatLink>
      </S.CatListWrapper>  
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
          <S.AlgoliaLogoWrapper className="dark">
            <img src={SearchImgDarkBg} alt="powered by Algolia Search" height="24" width="168"/>
          </S.AlgoliaLogoWrapper>
          <S.AlgoliaLogoWrapper className="light">
            <img src={ SearchImgLightBg } alt="powered by Algolia Search" height="24" width="168"/>
          </S.AlgoliaLogoWrapper>
        </S.SearchStatsWrapper> 
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
)}

export default Search