import React, { useState, useEffect } from "react"
import { Home } from "styled-icons/boxicons-solid/Home"
import { Bulb as BulbOff } from "styled-icons/boxicons-regular/Bulb"
import { Bulb } from "styled-icons/boxicons-solid/Bulb"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect (() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarLink className="home" to="/" cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6} title="Voltar para Home">
        <S.MenuBarItem className="home">
          <Home></Home>
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6} title="Pesquisar">
          <S.MenuBarItem>
            <Search></Search>
          </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarItem title="Mudar o tema" onClick={() => {
        window.__setPreferredTheme(isDarkMode ? 'light': 'dark')
      }}
      className={theme}
      >
      { isDarkMode ? <BulbOff /> : <Bulb />}
      </S.MenuBarItem> 
    </S.MenuBarWrapper>
  )}

export default MenuBar