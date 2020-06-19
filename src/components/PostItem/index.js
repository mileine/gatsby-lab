import React from 'react'
import PropTypes from "prop-types"
import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled'

const PostItem = ({
    slug,
    background,
    category,
    date,
    title,
    description
  }) => (
    <S.PostItemWrapper>
      <S.PostItemHeader>
        <S.PostItemTagLink background={background} to={'categories/' + category} cover direction="right" bg={getThemeColor()} duration={0.6}>{category}</S.PostItemTagLink>
        <S.PostItemDate>{date}</S.PostItemDate>
      </S.PostItemHeader>
      <S.PostItemLink to={slug} cover direction="right" bg={getThemeColor()} duration={0.6}>
        <S.PostItemInfo>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemLink>
    </S.PostItemWrapper>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
