import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';
import './styles/Article.css';

function Article(props) {
  const { title, author, source, description, url, image, dispatch } = props;

  return(
    <div className='article-container'>
      <h5 className='article-source'>Source: {source}</h5>
      <a href={url}><img className='image' src={image} /></a>
      <h1>{title}</h1>
      <h5>{author}</h5>
      <p>{description}</p>

    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string
};
export default connect()(Article);
