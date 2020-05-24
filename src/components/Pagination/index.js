import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    {!isFirst && 
      <S.PaginationLink to={prevPage} cover direction="right" bg={getThemeColor()} duration={0.6}className="previous">página anterior</S.PaginationLink>
    }
    {isFirst && 
      <S.PaginationStatus className="first">{currentPage} de {numPages}</S.PaginationStatus>
    }
    {!isLast && 
      <S.PaginationLink to={nextPage} cover
      direction="left"
      bg={getThemeColor()}
      duration={0.6} className="next">proxima página </S.PaginationLink>
    }
    {isLast && 
      <S.PaginationStatus className="last">{currentPage} de {numPages}</S.PaginationStatus>
    }
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination