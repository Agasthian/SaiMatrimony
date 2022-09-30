import React, { useEffect } from "react"

// import Navbar from "../navigation/navbar"
// import Footer from "../footer/footer"
import Header from '../header/header'
import FooterNew from '../footer/footer.components'

const Layout = props => {
  const changeVhvariable = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  // useEffect(() => {
  //   // We listen to the resize event
  //   changeVhvariable()
  //   window.addEventListener("resize", changeVhvariable)
  //   return () => window.removeEventListener("resize", changeVhvariable)
  // }, [])

  return (
    <div>
      {/* <Navbar /> */}
      <Header/>
      {props.children}
      <FooterNew/>
    </div>
  )
}

export default Layout
