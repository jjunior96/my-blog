import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../../styles/global"

import * as S from './styled'
import Siderbar from "../Sidebar"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Siderbar/>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
