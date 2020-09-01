import React from 'react';
import PropTypes from "prop-types";

const Image = ({ image }) => {

    const { largeImageURL, likes, previewURL, tags, views } = image;

    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 shw">
        <div className="card">
          <img src={previewURL} alt={tags} className="card-img-top" />

          <div className="card-body">
            <p className="card-text">{likes} Me Gusta <i class="fas fa-thumbs-up"></i></p>
            <p className="card-text">{views} Vistas <i class="fas fa-eye"></i></p>
          </div>
          <div className="card-footer">
              <a
                href={largeImageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn"
              >Ver Imágen</a>
          </div>
        </div>
      </div>
    );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
};
 
export default Image;