import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Pcard(props) {
  return (
    <div className="col-md-4">
      <div className="work-box">
        <a href={props.imageSrc} data-gallery="portfolioGallery" className="portfolio-lightbox">
          <div className="work-img">
            <img src={props.imageSrc} alt="" className="img-fluid" />
          </div>
        </a>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{props.title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{props.category}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <Link to={props.link}>
                  <span className="bi bi-plus-circle"></span>
                </Link>
              </div>
            <button className="btn btn-danger mt-2" onClick={props.onRemove}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pcard;
