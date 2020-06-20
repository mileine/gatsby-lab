import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'
import getThemeColor from "../../utils/getThemeColor"
import BlogIcon from "../../images/nl-icon.svg"

const Profile = () => {
  const {
    site: { 
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
      query MySiteMetadata {
        site{
          siteMetadata{
            title
            description
            position
          }
        }
      }
    `)
    return(
      <S.ProfileWrapper>
        <S.ProfileLink bg={getThemeColor()} to="/">
          <S.ProfileIcon>
            <img src={BlogIcon} alt="#nowLearning Blog" width="50"/>
          </S.ProfileIcon>
          <S.ProfileAuthor>
            <S.ProfileTitle>{title}</S.ProfileTitle>
            <S.ProfilePosition>{position}</S.ProfilePosition>
            <S.ProfileDescription>{description}</S.ProfileDescription>
          </S.ProfileAuthor>
        </S.ProfileLink> 
      </S.ProfileWrapper>
    )
  }

export default Profile