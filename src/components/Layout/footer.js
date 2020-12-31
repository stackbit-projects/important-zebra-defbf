import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="rainfall.id" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Simplecode. All rights reserved.
        </a>
      </footer>
    )
  }
}
export default Footer
