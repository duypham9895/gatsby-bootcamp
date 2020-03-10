import React from "react"

import "../assets/style.scss"
import LayoutStyles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
