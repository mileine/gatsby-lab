import React from "react"

import * as S from "./styled"

export default function ThemeButton({ toggled, onClick}) {
  return (
    <S.ThemeButtonWrapper onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
      <S.ThemeButtonNotch className={`notch${toggled ? " night" : ""}`}>
        <S.ThemeButtonNotchCrater className={`crater${toggled ? " night" : ""}`}/>
        <S.ThemeButtonNotchCrater className={`crater${toggled ? " night" : ""}`}/>
      </S.ThemeButtonNotch>
      <S.ThemeButtonShapeWrapper>
        <S.ThemeButtonShape className={`shape sm${toggled ? " night " : ""}`}/>
        <S.ThemeButtonShape className={`shape sm${toggled ? " night " : ""}`}/>
        <S.ThemeButtonShape className={`shape md${toggled ? " night " : ""}`}/>
        <S.ThemeButtonShape className={`shape lg${toggled ? " night " : ""}`}/>
      </S.ThemeButtonShapeWrapper>
    </S.ThemeButtonWrapper>
  )
}
