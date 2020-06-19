import React from "react"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"
import * as S from "./styled"

const Footer = () => {

  return (
    <S.FooterWrapper>
      <S.FooterItem className="social-links">
        <SocialLinks />
      </S.FooterItem>
      <S.FooterItem className="menu-links">
        <MenuLinks />
      </S.FooterItem>
    </S.FooterWrapper>
  )}

export default Footer