import React from 'react'
import { Link} from 'react-router-dom'
import 'fa-icons';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-dark">
    <div className="col-md-4 d-flex align-items-center">
      
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
  
            <Link href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </Link>
            <Link href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </Link>
            <Link href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </Link>
            <Link href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Link>
          
      </Link>
      <span className="mb-3 mb-md-0 text-muted">© 2023 Foods, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      
    </ul>
  </footer>
    </div>
  )
}
