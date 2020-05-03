import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Topbar from "../Topbar"
import Footer from "../Footer"

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>  
      <GlobalStyles></GlobalStyles>
      <TransitionPortal level="top">
        <Topbar />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <Footer />
      </TransitionPortal>
     </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
