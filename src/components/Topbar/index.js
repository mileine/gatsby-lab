import React from "react"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import MenuBar from "../MenuBar"

import * as S from "./styled"

const Topbar = () => (
  <S.TopbarWrapper>
    <Profile></Profile>
    <S.TopbarLinks>
      <MenuLinks />
      <MenuBar />
    </S.TopbarLinks>
  </S.TopbarWrapper>
)

export default Topbar