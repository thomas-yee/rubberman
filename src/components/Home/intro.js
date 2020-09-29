import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Intro = img => {
  return (
    <div>
      {console.log(img)}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-2 col-sm-8 mx-auto">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </h4>
              <Link to="/contact/">
                <button className="btn text-uppercase btn-blue mt-3">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="col">
              <Img fixed={img} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
