import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
    // height: "1%",
    // backgroundColor : ""
    border: "2px solid green"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Follow for updates<br/>
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
