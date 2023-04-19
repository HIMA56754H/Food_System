import React from "react";

export default function Carousal() {
  return (
    <div class='carousel'>
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
  <div className="carousel-caption" style={{zIndex:"10"}}>
            <form className="d-flex">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
    <div className="carousel-item active">
      <img src="./img/Forestcake.png" className="w-100 d-inline-block" alt="Forestcake"/>
    </div>...
    <div className="carousel-item">
      <img src="./img/Aloo-parantha.png" className="w-100 d-inline-block" alt="Parantha"/>
    </div>
    <div className="carousel-item">
      <img src="./img/dosa.png" className="w-100 d-inline-block" alt="Dosa"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
