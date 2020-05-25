import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from './styled'
import getThemeColor from "../../utils/getThemeColor"
import { LaptopCode } from "styled-icons/fa-solid/LaptopCode"

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
        <S.ProfileLink bg={getThemeColor()}>
          <S.ProfileIcon>
            <LaptopCode></LaptopCode>
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