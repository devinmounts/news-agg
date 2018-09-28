import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';
import './styles/Article.css';

function Article(props) {
  const { title, author, source, description, url, image, dispatch } = props;

  return(
    <div>
      <img src={image} />
      <h1>{title}</h1>
      <h5>{author}</h5>
      <p>{description}</p>
      <h5><a href={url}>Read More at {source}</a></h5>
    </div>
  );
}

Article.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string
};
export default connect()(Article);
