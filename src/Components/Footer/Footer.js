import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <footer>
        <div className="text">
          <span>
            Created By <Link to="#">CodingLab</Link> | &#169; 2021 All Rights
            Reserved
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
